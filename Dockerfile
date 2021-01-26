FROM alpine
LABEL maintainer="miralem.avdic24@gmail.com"
RUN apk add --update @vue/cli
COPY . /src
WORKDIR /src
RUN npm install
EXPOSE 8080
ENTRYPOINT npm run build

