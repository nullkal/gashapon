FROM node:7.4-alpine
RUN apk add --no-cache --virtual build-dependencies curl tar \
  && mkdir -p /opt/yarn \
  && curl -L https://yarnpkg.com/latest.tar.gz | tar -zx -C /opt/yarn --strip 1 \
  && apk del --no-cache build-dependencies
ENV PATH /opt/yarn/bin/:$PATH

RUN mkdir /app
WORKDIR   /app

COPY package.json yarn.lock /app/
RUN yarn install --pure-lockfile

COPY . /app
