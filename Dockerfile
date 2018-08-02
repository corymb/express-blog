FROM node:10.4
RUN npm install nodemon -g

WORKDIR /app
COPY package.json /app
RUN yarn install
