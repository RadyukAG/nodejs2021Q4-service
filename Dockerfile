FROM node:16-alpine
WORKDIR /NODEJS-2021Q4-SERVICE
COPY . ./
RUN npm install
CMD ["nodemon", "src/server.ts"]
