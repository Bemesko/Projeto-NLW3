FROM node:14.19.1

COPY ./package.json ./package.json

RUN npm install

COPY . .

EXPOSE 5500

CMD ["npm", "start"]