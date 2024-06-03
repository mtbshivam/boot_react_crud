# Stage 1: Build the React app
FROM node:16 AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy source files and build the app
COPY . ./
RUN npm run build

# Stage 2: Serve the React app with Nginx
FROM nginx:alpine

# Copy the built app from Stage 1
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
