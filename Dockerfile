# Development stage
FROM node:16-alpine as development

WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json .  

# Install dependencies
RUN npm install  

# Copy the rest of the application files to the container
COPY . .  

# Build the application
RUN npm run build  

# Production stage
FROM node:16-alpine as production

# Set the environment variable to production
ENV NODE_ENV=production  

WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json .  

# Install production dependencies only
RUN npm install --only=production  

# Copy the built application from the development stage
COPY --from=development /usr/src/app/dist .  

# Start the application with Node.js
CMD [ "node", "dist/app.js" ]  
