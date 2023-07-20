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

 

 

# Expose the port that will be used to access the application
EXPOSE 5000

        
 
RUN npm run docs:dev
