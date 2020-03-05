FROM node:lts-buster-slim
# app directory
RUN mkdir -p /usr/scr/backend
WORKDIR /usr/scr/backend
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json /usr/scr/backend
RUN npm install
RUN npm install -g nodemon 
# If you are building your code for production
# RUN npm ci --only=production
# Bundle app source
COPY . .
# bind port
EXPOSE 9000:9000
CMD [ "nodemon", "/usr/scr/backend/src/index.js"]