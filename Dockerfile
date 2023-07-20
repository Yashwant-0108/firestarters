# Use the official Node.js image as the base image
FROM node:14

 

# Set the working directory inside the container
WORKDIR /app

 

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

 

# Install project dependencies
RUN npm install

 

# Copy the entire project directory to the working directory
COPY . .

 

# Build the Vitepress static files
RUN npm run build

 

# Install serve to serve the static files
RUN npm install -g serve

 

# Expose the port that will be used to access the application
EXPOSE 5000

 

# Command to serve the static files
CMD ["serve", "-s", "dist", "-l", "5000"]
