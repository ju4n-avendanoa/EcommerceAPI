FROM node:16-alpine as development

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .  

RUN npm run build 

FROM node:16-alpine as production

ENV NODE_ENV = production

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install --only=production

COPY --from=development /usr/src/app/dist .

CMD [ "node", "dist/app.js" ]