# FROM ubuntu:16.04

# RUN apt-get update -y && \
#     apt-get install -y python-pip python-dev

# # We copy just the requirements.txt first to leverage Docker cache
# COPY ./Backend/requirements.txt /app/requirements.txt

# WORKDIR /app

# RUN pip install -r requirements.txt

# COPY ./Backend /app

# ENTRYPOINT [ "python" ]

# CMD [ "main.py"]

FROM python:3.6-alpine

ENV CELERY_BROKER_URL redis://redis:6379/0
ENV CELERY_RESULT_BACKEND redis://redis:6379/0
ENV C_FORCE_ROOT true

ENV HOST 0.0.0.0
ENV PORT 5001
ENV DEBUG true

COPY ./Backend/requirements.txt /app/requirements.txt

WORKDIR /app

COPY ./Backend /app

RUN pip install -r requirements.txt

EXPOSE 5001

RUN pip install gunicorn

CMD ["gunicorn", "--bind", "0.0.0.0:5001", "worker", "3", "app:app"]