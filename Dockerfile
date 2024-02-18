FROM node:21-alpine3.18
WORKDIR /app

COPY package.json /app/
COPY index.js /app/
COPY public /app/public/

COPY server.js /app/
COPY views /app/views/ 

RUN npm install
EXPOSE 3000

CMD node index.js