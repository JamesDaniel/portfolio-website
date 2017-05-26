
FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Install front-end dependencies
RUN npm install -g bower
RUN bower install --allow-root

EXPOSE 8080
CMD [ "npm", "start" ]

