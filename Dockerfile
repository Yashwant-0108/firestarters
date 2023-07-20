# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Change the ownership of the node_modules directory to the 'node' user
RUN chown -R node:node node_modules

# Switch to the 'node' user for subsequent commands
USER node

# Copy the entire project directory to the working directory
COPY . .

# Expose the port that will be used to access the application
EXPOSE 5173

# Command to serve the static files using Vitepress development server on port 5173
CMD ["npm", "run", "docs:dev"]
