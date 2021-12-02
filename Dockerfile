# FROM 209490711359.dkr.ecr.ap-northeast-2.amazonaws.com/scrooge-server:latest
FROM ubuntu:20.04

ENV NODE_ENV=production

WORKDIR /usr/src/app
 
COPY package.json .
 
COPY tsconfig.json .

RUN npm install --only=production

COPY . .

COPY refs/ormconfig.json .

RUN npx tsc -p .
 
EXPOSE 3000
 
ENTRYPOINT ["node"]
 
CMD ["./dist/app.js"]

