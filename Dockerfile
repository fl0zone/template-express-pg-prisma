FROM node:16 as development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY ./src ./src
EXPOSE 80
CMD [ "npm", "run", "start:dev" ]

FROM development as builder
WORKDIR /usr/src/app
RUN rm -rf node_modules
RUN npm ci --only=production
RUN npm i -g prisma
RUN prisma generate
EXPOSE 80
CMD [ "npm", "start" ]
 
FROM alpine:latest as production
RUN apk --no-cache add nodejs ca-certificates
WORKDIR /root/
COPY --from=builder /usr/src/app ./
CMD [ "node", "src/index.js" ]
