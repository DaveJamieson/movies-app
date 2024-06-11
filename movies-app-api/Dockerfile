# Specify a base image

FROM node:22-alpine3.19

# Creat and use a working directoryt

WORKDIR /app

# Copy all the dependency files

COPY package.json ./
COPY package-lock.json ./

# Install dependencies

RUN npm install

# Copy the rest of the source code

COPY . .

# Expose the port that the app runs on

EXPOSE 3001

# Start the app
CMD ["npm", "run", "dev"]