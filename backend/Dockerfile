FROM node:8
MAINTAINER augustas
# app directory
WORKDIR /usr/scr/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
# Bundle app source
COPY index.js ./
COPY . . 
# bind port
EXPOSE 9000:9000
CMD [ "npm", "start", "./index.js"]
