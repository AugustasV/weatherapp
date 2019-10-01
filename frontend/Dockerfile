FROM node:8
MAINTAINER augustas
# app directory
WORKDIR /usr/scr/frontend
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
# Bundle app source
COPY ./src/index.jsx ./
COPY . . 
# bind port
EXPOSE 9000:9000
CMD [ "npm", "start", "./index.jsx", "dev"]

