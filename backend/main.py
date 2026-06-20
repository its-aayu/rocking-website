from dotenv import load_dotenv

# load_dotenv MUST be called before any module that reads os.getenv at import time
load_dotenv()

from datetime import datetime

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import ValidationError

from email_service import send_admin_email, send_customer_email
from models import BookingRequest

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

# In-memory booking store (persists until server restarts)
bookings: list[dict] = []


# ── Health check ──────────────────────────────────────────────────────────────
@app.get("/")
def health_check():
    return {"status": "Singer Portfolio Backend Running"}


# ── POST /api/bookings ────────────────────────────────────────────────────────
@app.post("/api/bookings")
async def create_booking(request: Request):
    body = await request.json()
    print(f"New booking received: {body}")

    try:
        booking = BookingRequest(**body)
    except ValidationError as exc:
        first_error = exc.errors()[0]
        message = first_error["msg"].replace("Value error, ", "")
        return JSONResponse(
            status_code=400,
            content={"success": False, "message": message},
        )

    booking_dict = booking.model_dump()
    booking_dict["received_at"] = datetime.now().isoformat()
    bookings.append(booking_dict)

    admin_sent = send_admin_email(booking_dict)
    customer_sent = send_customer_email(booking_dict)

    if not admin_sent and not customer_sent:
        return JSONResponse(
            status_code=500,
            content={
                "success": False,
                "message": "Booking saved but emails could not be sent. We will contact you shortly.",
            },
        )

    return JSONResponse(
        status_code=201,
        content={
            "success": True,
            "message": "Booking confirmed! A confirmation email has been sent to you.",
            "booking": booking_dict,
        },
    )


# ── GET /api/bookings ─────────────────────────────────────────────────────────
@app.get("/api/bookings")
def get_bookings():
    return bookings
