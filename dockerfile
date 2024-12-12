#  Specify Base Image
FROM node:alpine

# Specify Working Directory
WORKDIR '/app'

# Copy dependencies separately
COPY package.json .

# Install dependencies
RUN npm install

# Copy rest of app directory
COPY . .

# Initialize base command
CMD ["npm", "start"]