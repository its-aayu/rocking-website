import os
import smtplib
import ssl
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

EMAIL_USER = os.getenv("EMAIL_USER")
EMAIL_PASS = os.getenv("EMAIL_PASS")

# Ordered list of all booking fields with human-readable labels
_FIELD_LABELS = [
    ("name",     "Name"),
    ("phone",    "Phone"),
    ("email",    "Email"),
    ("event",    "Event Type"),
    ("date",     "Event Date"),
    ("budget",   "Budget"),
    ("audience", "Audience Size"),
    ("venue",    "Venue"),
    ("guests",   "Number of Guests"),
    ("location", "Location"),
    ("message",  "Message"),
]


def _field_rows_html(booking: dict) -> str:
    """Build <tr> rows for every field that has a value."""
    rows = []
    for key, label in _FIELD_LABELS:
        value = booking.get(key)
        if not value:
            continue
        if key == "email":
            cell = f'<a href="mailto:{value}" style="color:#c0392b;">{value}</a>'
        else:
            cell = str(value)
        rows.append(
            f'<tr>'
            f'<td style="padding:8px 20px 8px 0;font-weight:600;white-space:nowrap;'
            f'color:#555;vertical-align:top;">{label}</td>'
            f'<td style="padding:8px 0;color:#111;vertical-align:top;">{cell}</td>'
            f'</tr>'
        )
    return "\n".join(rows)


def _connect() -> smtplib.SMTP_SSL:
    context = ssl.create_default_context()
    return smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context, timeout=10)


def send_admin_email(booking: dict) -> bool:
    try:
        msg = MIMEMultipart("alternative")
        msg["From"] = EMAIL_USER
        msg["To"] = EMAIL_USER
        msg["Subject"] = f"New Booking Request — {booking.get('event', 'General')} | {booking.get('name', '')}"

        rows = _field_rows_html(booking)
        received = booking.get("received_at", "")

        html = f"""
        <!DOCTYPE html>
        <html>
        <body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td align="center" style="padding:30px 0;">
                <table width="600" cellpadding="0" cellspacing="0"
                       style="background:#ffffff;border-radius:8px;overflow:hidden;
                              box-shadow:0 2px 8px rgba(0,0,0,0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background:#c0392b;padding:24px 32px;">
                      <h1 style="margin:0;color:#fff;font-size:22px;letter-spacing:1px;">
                        New Booking Request
                      </h1>
                      <p style="margin:4px 0 0;color:#f9c0c0;font-size:13px;">
                        Aman Raj Srivastava — Singer Portfolio
                      </p>
                    </td>
                  </tr>
                  <!-- Body -->
                  <tr>
                    <td style="padding:28px 32px;">
                      <p style="margin:0 0 20px;color:#333;font-size:14px;">
                        A new booking request has been submitted. Full details below:
                      </p>
                      <table cellpadding="0" cellspacing="0" width="100%"
                             style="font-size:14px;line-height:1.6;border-top:1px solid #eee;">
                        {rows}
                      </table>
                    </td>
                  </tr>
                  <!-- Footer -->
                  <tr>
                    <td style="background:#f9f9f9;padding:16px 32px;border-top:1px solid #eee;">
                      <p style="margin:0;font-size:12px;color:#999;">
                        Received at: {received}
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
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
        msg["Subject"] = "Your Booking Request Has Been Received — Aman Raj Srivastava"

        rows = _field_rows_html(booking)
        name = booking.get("name", "there")

        html = f"""
        <!DOCTYPE html>
        <html>
        <body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td align="center" style="padding:30px 0;">
                <table width="600" cellpadding="0" cellspacing="0"
                       style="background:#ffffff;border-radius:8px;overflow:hidden;
                              box-shadow:0 2px 8px rgba(0,0,0,0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background:#c0392b;padding:24px 32px;">
                      <h1 style="margin:0;color:#fff;font-size:22px;letter-spacing:1px;">
                        Booking Request Received!
                      </h1>
                      <p style="margin:4px 0 0;color:#f9c0c0;font-size:13px;">
                        Aman Raj Srivastava — Singer Portfolio
                      </p>
                    </td>
                  </tr>
                  <!-- Greeting -->
                  <tr>
                    <td style="padding:28px 32px 0;">
                      <p style="margin:0;color:#333;font-size:15px;">
                        Hello <strong>{name}</strong>,
                      </p>
                      <p style="margin:12px 0 20px;color:#555;font-size:14px;line-height:1.6;">
                        Thank you for reaching out! We have received your booking request and
                        will get back to you within <strong>24 hours</strong> to confirm the details.
                        Here is a summary of what you submitted:
                      </p>
                    </td>
                  </tr>
                  <!-- Booking summary table -->
                  <tr>
                    <td style="padding:0 32px;">
                      <table cellpadding="0" cellspacing="0" width="100%"
                             style="font-size:14px;line-height:1.6;
                                    border:1px solid #eee;border-radius:6px;
                                    border-top:3px solid #c0392b;">
                        {rows}
                      </table>
                    </td>
                  </tr>
                  <!-- Closing -->
                  <tr>
                    <td style="padding:24px 32px 0;">
                      <p style="margin:0;color:#555;font-size:14px;line-height:1.6;">
                        If you have any questions in the meantime, feel free to reach out:
                      </p>
                      <ul style="margin:12px 0;padding-left:20px;color:#555;font-size:14px;line-height:1.8;">
                        <li>📞 Phone / WhatsApp: <strong>+91 97184 27187</strong></li>
                        <li>✉️ Email: <strong>aman.sargammusic@gmail.com</strong></li>
                      </ul>
                    </td>
                  </tr>
                  <!-- Sign off -->
                  <tr>
                    <td style="padding:20px 32px 28px;">
                      <p style="margin:0;color:#333;font-size:14px;">
                        Warm regards,<br>
                        <strong>Aman Raj Srivastava</strong><br>
                        <span style="color:#999;font-size:12px;">Professional Singer | Delhi, India</span>
                      </p>
                    </td>
                  </tr>
                  <!-- Footer -->
                  <tr>
                    <td style="background:#f9f9f9;padding:14px 32px;border-top:1px solid #eee;">
                      <p style="margin:0;font-size:11px;color:#bbb;text-align:center;">
                        This is an automated confirmation. Please do not reply directly to this email.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
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
