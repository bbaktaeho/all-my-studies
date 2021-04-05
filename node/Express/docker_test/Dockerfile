FROM node:latest

# 이미지 생성 과정에서 실행할 명령어
RUN mkdir -p /user/src/app

# 이미지 내에서 명령어를 실행할 디렉토리 설정
WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install

COPY . /usr/src/app

EXPOSE 3000

CMD ["npm", "start"]