# Use an official Node.js image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install dependencies
# Also install the 'serve' package globally to serve the static site
RUN npm install && npm install -g serve

# Copy the rest of the application's source code
COPY . ./

# Build the application for production
RUN npm run build

# Command to serve the static files from the build directory
CMD ["serve", "-s", "build", "-l", "5575"]

# Expose port 5575 to the outside once the container has launched
EXPOSE 5575
