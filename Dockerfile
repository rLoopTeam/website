FROM ubuntu:14.04

RUN apt-get update && apt-get -y install curl nginx

RUN curl -sL https://deb.nodesource.com/setup | bash -

RUN apt-get -y install nodejs python build-essential compass-bootstrap-sass-plugin

RUN gem install compass

COPY ["Gruntfile.js", "package.json", "test", "app", "./"]

RUN npm install && ./node_modules/.bin/bower install

RUN ./node_modules/.bin/grunt dist

RUN mv ./dist/* /var/www/nginx/

RUN rm -rf /var/lib/apt/lists/* && \
  echo "\ndaemon off;" >> /etc/nginx/nginx.conf

# Define working directory.
WORKDIR /etc/nginx

# Define default command.
CMD ["nginx"]

# Expose ports.
EXPOSE 80