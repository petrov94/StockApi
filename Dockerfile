FROM node:12
# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm config set strict-ssl false
RUN npm install
RUN npm install nodemon --save-dev
# Bundle app source
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]