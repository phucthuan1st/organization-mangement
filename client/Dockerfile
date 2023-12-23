# Stage 1: Build React app
FROM node:14 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Run server and serve React app using Nginx
FROM alpine:latest

WORKDIR /app

# Install necessary dependencies for the server
RUN apk add --no-cache nodejs npm texlive texmf-dist-fontsextra

# Copy the built React app to the Nginx web root directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy server files to the container
COPY texCompileServer.js /app/texCompileServer.js

# Expose port 80 for the web server
EXPOSE 80

# CMD to start both Nginx and the Express server
CMD ["sh", "-c", "npm install && node texCompileServer.js && nginx -g 'daemon off;'"]
