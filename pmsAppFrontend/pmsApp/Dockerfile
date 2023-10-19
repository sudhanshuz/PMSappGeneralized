# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install application dependencies
RUN npm install

# Copy the entire application source code to the container
COPY . .

# Build the Angular application for production
RUN ng build

# Start the Angular application
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]

# Expose the port on which the Angular application will run (usually 4200)
EXPOSE 4200