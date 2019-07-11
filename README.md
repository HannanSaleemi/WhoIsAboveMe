# WhoIsAboveMe

## Running this project locally

### Build the single dockerfiles

- Building the Frontend:
  - `docker build -f frontend.Dockerfile .`
  - `docker run -p 3001:3000 <DOCKER CONTAINER ID HERE>`

- Building the Backend:
  - `docker build -f baclend.Dockerfile .`
  - `docker run -p 5001:5000 <DOCKER CONTAINER ID HERE>`

### Docker Compose - Building all Services

- Bulding is all:
  - `docker-compose up --build`

- Ports:
  - `3001` is for Frontend
  - `5001` is for Backend
