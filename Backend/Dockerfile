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

ENTRYPOINT [ "python" ]

CMD [ "main.py" ]

# RUN pip install gunicorn

# CMD ["gunicorn", "--bind", "0.0.0.0:5001", "--workers", "3", "main:main"]