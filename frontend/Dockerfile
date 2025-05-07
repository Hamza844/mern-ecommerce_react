# frontend/Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./

# Fix for dependency conflicts
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]