# Use the official Node.js image as a base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Install a lightweight web server to serve the built app
RUN npm install -g serve

# Set the command to run the web server on container startup
CMD ["serve", "-s", "build"]

# Expose port 3000 to the host
EXPOSE 3000
