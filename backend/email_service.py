import os
import smtplib
import ssl
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

EMAIL_USER = os.getenv("EMAIL_USER")
EMAIL_PASS = os.getenv("EMAIL_PASS")


def _connect() -> smtplib.SMTP_SSL:
    context = ssl.create_default_context()
    return smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context, timeout=10)


def send_admin_email(booking: dict) -> bool:
    try:
        msg = MIMEMultipart("alternative")
        msg["From"] = EMAIL_USER
        msg["To"] = EMAIL_USER
        msg["Subject"] = "New Singer Booking Request"

        html = f"""
        <h2 style="font-family:sans-serif;color:#111;">New Booking Received</h2>
        <table style="font-family:sans-serif;font-size:14px;line-height:2.2;border-collapse:collapse;">
          <tr><td style="padding-right:20px;font-weight:bold;">Name</td><td>{booking.get("name", "-")}</td></tr>
          <tr><td style="font-weight:bold;">Phone</td><td>{booking.get("phone", "-")}</td></tr>
          <tr><td style="font-weight:bold;">Email</td><td><a href="mailto:{booking.get("email", "")}">{booking.get("email", "-")}</a></td></tr>
          <tr><td style="font-weight:bold;">Event</td><td>{booking.get("event", "-")}</td></tr>
          <tr><td style="font-weight:bold;">Date</td><td>{booking.get("date", "-")}</td></tr>
          <tr><td style="font-weight:bold;">Budget</td><td>{booking.get("budget") or "-"}</td></tr>
          <tr><td style="font-weight:bold;">Audience</td><td>{booking.get("audience") or "-"}</td></tr>
          <tr><td style="font-weight:bold;">Venue</td><td>{booking.get("venue") or "-"}</td></tr>
          <tr><td style="font-weight:bold;">Guests</td><td>{booking.get("guests") or "-"}</td></tr>
          <tr><td style="font-weight:bold;">Location</td><td>{booking.get("location") or "-"}</td></tr>
          <tr><td style="font-weight:bold;vertical-align:top;">Message</td><td>{booking.get("message") or "-"}</td></tr>
        </table>
        """

        msg.attach(MIMEText(html, "html"))

        with _connect() as server:
            server.login(EMAIL_USER, EMAIL_PASS)
            server.sendmail(EMAIL_USER, EMAIL_USER, msg.as_string())

        print("Admin email sent")
        return True

    except Exception as e:
        print(f"Admin email failed: {e}")
        return False


def send_customer_email(booking: dict) -> bool:
    customer_email = booking.get("email")
    if not customer_email:
        return False

    try:
        msg = MIMEMultipart("alternative")
        msg["From"] = EMAIL_USER
        msg["To"] = customer_email
        msg["Subject"] = "Your Booking Request Has Been Received"

        html = f"""
        <p style="font-family:sans-serif;">Hello <strong>{booking.get("name", "Customer")}</strong>,</p>
        <p style="font-family:sans-serif;">
          Thank you for reaching out! We have received your booking request.
        </p>
        <ul style="font-family:sans-serif;line-height:1.8;">
          <li><strong>Event:</strong> {booking.get("event", "-")}</li>
          <li><strong>Date:</strong> {booking.get("date", "-")}</li>
          <li><strong>Budget:</strong> {booking.get("budget") or "-"}</li>
        </ul>
        <p style="font-family:sans-serif;">
          We will review your request and get back to you soon.
        </p>
        <p style="font-family:sans-serif;margin-top:20px;">
          Best regards,<br><strong>Aman Raj Srivastava Team</strong>
        </p>
        """

        msg.attach(MIMEText(html, "html"))

        with _connect() as server:
            server.login(EMAIL_USER, EMAIL_PASS)
            server.sendmail(EMAIL_USER, customer_email, msg.as_string())

        print(f"Customer email sent to {customer_email}")
        return True

    except Exception as e:
        print(f"Customer email failed: {e}")
        return False
