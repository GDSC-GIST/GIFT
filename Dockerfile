# set the node version
FROM node:18

# Work dir setting
WORKDIR /usr/app
COPY ./ /usr/app/
# Application dependency setting

# install module
WORKDIR  /usr/app/front/
RUN npm install
RUN npm run build
WORKDIR  /usr/app/backend/
RUN npm install pm2 -g

EXPOSE 3000
CMD [ "pm2-runtime", "start", "server.js" ]