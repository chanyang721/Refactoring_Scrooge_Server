# FROM 209490711359.dkr.ecr.ap-northeast-2.amazonaws.com/scrooge-server:latest
FROM node:12.18.1
ENV NODE_ENV=production

WORKDIR src/app
 
# COPY package.json .
 
# COPY tsconfig.json .
COPY ["package.json", "tsconfig.json"]

RUN npm install --production

# 소스 코드를 이미지에 추가 COPY 명령은 현재 디렉토리에 있는 모든 파일을 가져와서 이미지에 복사합니다.
COPY . .
 
ENTRYPOINT ["node"]
 
CMD ["./dist/app.js"]

