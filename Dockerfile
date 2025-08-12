FROM python:3.9-slim

WORKDIR /app

# Install build dependencies for psycopg2 and Pillow
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    libjpeg-dev \
    zlib1g-dev \
 && rm -rf /var/lib/apt/lists/*

# Install dependencies
COPY requirements.txt /app/
RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

# Copy the rest of the code
COPY . /app/

# Collect static files (so Django doesn't have to do it at runtime)
RUN python manage.py collectstatic --noinput

# Use Gunicorn for production
CMD ["gunicorn", "coffe_shop.wsgi:application", "--bind", "0.0.0.0:8000"]
