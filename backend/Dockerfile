# Use an official Node.js runtime as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the backend code into the container
COPY . .

# Expose the port on which the backend will run
EXPOSE 8000

# Run the backend using node index.js
CMD ["node", "index.js"]