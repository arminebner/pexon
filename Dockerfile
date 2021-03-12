FROM node:14.16-alpine3.13
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
CMD ["npm", "start"]