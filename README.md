# WhoIsAboveMe

## Running this project locally

### Build the single dockerfiles

- Building the Frontend:
  - `docker build -f frontend.Dockerfile .`
  - `docker run -p 3001:3000 <DOCKER CONTAINER ID HERE>`

- Building the Backend:
  - `docker build -f backend.Dockerfile .`
  - `docker run -p 5001:5000 <DOCKER CONTAINER ID HERE>`

### Docker Compose - Building all Services

- Bulding is all:
  - `docker-compose up --build`
  - To run in background `docker-compose up --build -d`

- Ports:
  - `3001` is for Frontend
  - `5001` is for Backend
  - `3307` is for DB

- Shutting down properly:
  - `docker ps -a` to show all containers running or stopped
  - `docker stop <CONTAINER IDS>` for all containers
  - Use container IDs to remove EG) `docker rm <CONTAINER_IDS>`

- When all else fails:
  - `docker system prune`