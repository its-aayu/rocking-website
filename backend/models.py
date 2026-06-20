import re
from datetime import date as date_type, datetime
from typing import Optional
from pydantic import BaseModel, field_validator


class BookingRequest(BaseModel):
    name: str
    phone: str
    email: str
    event: str
    date: str
    budget: Optional[str] = None
    message: Optional[str] = None
    # Concert specific
    audience: Optional[str] = None
    venue: Optional[str] = None
    # Home party specific
    guests: Optional[str] = None
    location: Optional[str] = None

    @field_validator("name")
    @classmethod
    def validate_name(cls, v):
        if not v or len(v.strip()) < 2:
            raise ValueError("Name must be at least 2 characters")
        return v.strip()

    @field_validator("email")
    @classmethod
    def validate_email(cls, v):
        if not re.match(r"^[^\s@]+@[^\s@]+\.[^\s@]+$", v):
            raise ValueError("A valid email address is required")
        return v.strip()

    @field_validator("phone")
    @classmethod
    def validate_phone(cls, v):
        clean = re.sub(r"[\s\-\+\(\)]", "", v)
        if not re.match(r"^\d{7,15}$", clean):
            raise ValueError("A valid phone number is required (7-15 digits)")
        return v.strip()

    @field_validator("event")
    @classmethod
    def validate_event(cls, v):
        if not v or not v.strip():
            raise ValueError("Event type is required")
        return v.strip()

    @field_validator("date")
    @classmethod
    def validate_date(cls, v):
        try:
            event_date = datetime.strptime(v, "%Y-%m-%d").date()
        except ValueError:
            raise ValueError("Date must be in YYYY-MM-DD format")
        if event_date < date_type.today():
            raise ValueError("Event date cannot be in the past")
        return v
