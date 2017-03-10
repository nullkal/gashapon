FROM ruby:2.4.0-alpine
RUN apk add --no-cache tzdata nodejs make gcc g++ libc-dev mariadb-dev

RUN mkdir /app
WORKDIR   /app

COPY Gemfile Gemfile.lock /app/
RUN bundle install

COPY . /app
