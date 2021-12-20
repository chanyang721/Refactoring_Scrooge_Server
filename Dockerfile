FROM 209490711359.dkr.ecr.ap-northeast-2.amazonaws.com/app_test:latest

ENV NODE_ENV=production

WORKDIR /usr/src/app.ts

# 소스 코드를 이미지에 추가 COPY 명령은 현재 디렉토리에 있는 모든 파일을 가져와서 이미지에 복사합니다.
COPY ["package.json", "tsconfig.json"]
COPY . .

# build
RUN npm install --only=production
# RUN npm run build

ENTRYPOINT ["node"]

CMD ["./dist/app.js"]