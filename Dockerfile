# Base Image
FROM node:10.16.0-alpine

# Set the working directory
WORKDIR /usr/src/app

# Install App Dependencies
COPY Frontend/package*.json ./
RUN npm install

# Bundle App Source
COPY Frontend/. .

EXPOSE 8080

CMD ["npm", "start"]