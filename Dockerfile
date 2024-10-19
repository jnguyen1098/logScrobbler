# Use an official Node image as the base image
FROM node:18-buster

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install Python 2 (required by node-gyp)
RUN apt-get update && \
    apt-get install -y python2 && \
    rm -rf /var/lib/apt/lists/*

# Install Node modules
RUN yarn install

# Copy the rest of the application files to the working directory
COPY . ./

# Expose the port that the app runs on
EXPOSE 8080

# Command to run the application
CMD ["yarn", "serve"]

