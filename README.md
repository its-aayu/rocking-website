# Aman Raj Srivastava — Singer Portfolio Website

A full-stack portfolio and booking website for professional singer **Aman Raj Srivastava**. Visitors can learn about the artist, browse the gallery, watch videos, and submit booking requests for concerts, home parties, and other events. All bookings trigger an instant email confirmation to both the client and the artist.

---

## Project Structure

```
rocking-website/
├── frontend/          # React + Vite web app
│   ├── src/
│   │   ├── pages/     # All page components (Home, Contact, BookConcert, etc.)
│   │   ├── css/       # Component-level CSS files
│   │   ├── assets/    # Images and static assets
│   │   ├── App.jsx    # Router and layout
│   │   └── main.jsx   # Entry point
│   ├── public/        # Static public assets (favicon, icons)
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── .env           # Frontend environment variables (not committed)
│
└── backend/           # FastAPI (Python) REST API
    ├── main.py        # App entry point, routes
    ├── email_service.py  # Gmail SMTP email logic
    ├── models.py      # Pydantic request validation
    ├── requirements.txt
    └── .env           # Backend environment variables (not committed)
```

---

## Tech Stack

| Layer    | Technology                              |
|----------|-----------------------------------------|
| Frontend | React 19, Vite, React Router, Tailwind CSS |
| Backend  | Python 3, FastAPI, Uvicorn              |
| Email    | Gmail SMTP via smtplib (port 465 SSL)   |
| Hosting  | Render.com (backend), any static host (frontend) |

---

## Features

- **Artist Portfolio** — Hero section, about, gallery, video, reviews, and stats
- **Booking Forms** — Separate forms for Concert, Home Party, and general contact
- **Email Notifications** — On every booking:
  - Admin receives a full summary email with all submitted details
  - Customer receives a styled confirmation email with their booking summary
- **Form Validation** — Both frontend (`required` fields) and backend (Pydantic) validation
- **CORS Enabled** — Backend accepts requests from any origin

---

## Local Development

### Prerequisites

- **Node.js** v18+ and npm
- **Python** 3.10+
- A **Gmail account** with an [App Password](https://support.google.com/accounts/answer/185833) enabled

---

### 1. Backend Setup

```bash
cd backend

# Create and activate a virtual environment (recommended)
python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # macOS / Linux

# Install dependencies
pip install -r requirements.txt

# Create the .env file with your Gmail credentials
# backend/.env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-char-app-password

# Start the development server
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

Backend runs at: `http://localhost:8000`

Health check: `GET http://localhost:8000/` → `{"status": "Singer Portfolio Backend Running"}`

---

### 2. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create the .env file pointing to the local backend
# frontend/.env
VITE_API_URL=http://localhost:8000

# Start the dev server
npm run dev
```

Frontend runs at: `http://localhost:5173`

---

## Environment Variables

### `frontend/.env`

| Variable       | Description                                   | Example                               |
|----------------|-----------------------------------------------|---------------------------------------|
| `VITE_API_URL` | Base URL of the backend API (no trailing `/`) | `https://your-backend.onrender.com`   |

### `backend/.env`

| Variable     | Description                           | Example                    |
|--------------|---------------------------------------|----------------------------|
| `EMAIL_USER` | Gmail address used to send emails     | `yourname@gmail.com`       |
| `EMAIL_PASS` | Gmail App Password (16 characters)    | `abcd efgh ijkl mnop`      |

> **Security:** Both `.env` files are listed in `.gitignore` and must never be committed to version control.

---

## API Reference

### `GET /`

Health check.

**Response:**
```json
{ "status": "Singer Portfolio Backend Running" }
```

---

### `POST /api/bookings`

Submit a new booking request. Sends email to admin and customer.

**Request body (JSON):**

| Field      | Type   | Required | Description                                     |
|------------|--------|----------|-------------------------------------------------|
| `name`     | string | Yes      | Full name (min 2 characters)                    |
| `phone`    | string | Yes      | Phone number (7–15 digits)                      |
| `email`    | string | Yes      | Valid email address                             |
| `event`    | string | Yes      | Event type (e.g. "Concert", "Home Party")       |
| `date`     | string | Yes      | Event date in `YYYY-MM-DD` format (not past)    |
| `budget`   | string | No       | Budget range                                    |
| `audience` | string | No       | Audience size (Concert bookings)                |
| `venue`    | string | No       | Venue name (Concert bookings)                   |
| `guests`   | string | No       | Number of guests (Home Party bookings)          |
| `location` | string | No       | Party location (Home Party bookings)            |
| `message`  | string | No       | Additional message                              |

**Success response (201):**
```json
{
  "success": true,
  "message": "Booking confirmed! A confirmation email has been sent to you.",
  "booking": { ...booking fields... }
}
```

**Validation error response (400):**
```json
{ "success": false, "message": "A valid email address is required" }
```

---

### `GET /api/bookings`

Returns all bookings stored in memory (resets on server restart).

---

## Deployment

### Backend — Render.com

1. Push the repo to GitHub.
2. Go to [render.com](https://render.com) → **New Web Service** → connect your GitHub repo.
3. Set **Root Directory** to `backend`.
4. Set **Build Command** to:
   ```
   pip install -r requirements.txt
   ```
5. Set **Start Command** to:
   ```
   uvicorn main:app --host 0.0.0.0 --port $PORT
   ```
6. Under **Environment Variables**, add:
   - `EMAIL_USER` = your Gmail address
   - `EMAIL_PASS` = your Gmail App Password
7. Deploy. Copy the service URL (e.g. `https://rocking-website-3.onrender.com`).

### Frontend

1. Update `frontend/.env`:
   ```
   VITE_API_URL=https://your-backend-url.onrender.com
   ```
2. Build the app:
   ```bash
   cd frontend
   npm run build
   ```
3. Deploy the `frontend/dist/` folder to any static host (Netlify, Vercel, GitHub Pages, etc.).

---

## Gmail App Password Setup

Standard Gmail passwords do not work with SMTP. You must use an **App Password**:

1. Go to your Google Account → **Security**
2. Enable **2-Step Verification** (required)
3. Go to **Security** → **App passwords**
4. Select app: **Mail**, device: **Other** → name it anything (e.g. "Singer Portfolio")
5. Copy the generated 16-character password → use as `EMAIL_PASS`

---

## Contact

For questions about this project, contact the artist:

- 📞 +91 97184 27187
- ✉️ aman.sargammusic@gmail.com
- 📍 Delhi,India
