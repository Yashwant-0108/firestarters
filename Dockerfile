# Stage 1: Build the Vitepress project
FROM registry.access.redhat.com/ubi8/nodejs-16:1 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vitepress project
RUN npm run docs:build


# Stage 2: Use a lightweight Node.js image for the final container
FROM registry.access.redhat.com/ubi8/nodejs-16:1

# Set the working directory inside the container
WORKDIR /app

# Copy the built files from the previous stage
COPY --from=build /app/docs/.vitepress/dist ./docs/.vitepress/dist

# Expose the port that Vitepress runs on (default is 3000)
EXPOSE 5173

# Run the Vitepress application
CMD ["npx", "vitepress", "preview", "docs"]
