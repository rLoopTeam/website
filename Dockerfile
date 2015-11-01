FROM ubuntu:14.04

RUN apt-get update && apt-get -y install curl

RUN curl -sL https://deb.nodesource.com/setup | sudo bash -

RUN apt-get -y install compass-bootstrap-sass-plugin

RUN sudo gem install compass

