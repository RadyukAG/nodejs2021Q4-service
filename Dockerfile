FROM node:16-alpine
WORKDIR /NODEJS-2021Q4-SERVICE/app
COPY package*.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
