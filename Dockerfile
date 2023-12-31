# Stage 1: Build the Vitepress project
FROM node:16 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vitepress project with increased memory allocation
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN npm run docs:build

# Ensure correct ownership and permissions for npm cache directory
RUN mkdir -p /home/node/.npm && chown -R node:node /home/node/.npm

# Switch to the node user
USER node

# Stage 2: Use the same base image for the final container
FROM node:16 AS final

# Set the working directory inside the container
WORKDIR /app

# Copy the built files from the previous stage
# COPY --from=build /app/docs/.vitepress/dist ./docs/.vitepress/dist

# Expose the port that Vitepress runs on (default is 3000)
EXPOSE 5173

# Run the Vitepress application
CMD ["npx", "vitepress", "preview", "docs"]
