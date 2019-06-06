FROM	mariadb:10.3
LABEL	maintainer="Noor Octavian Anwar <@arrokh>"

ENV MYSQL_ROOT_PASSWORD nasigoreng
ENV MYSQL_USER alvin.arrokh
ENV MYSQL_PASSWORD nasigoreng
ENV MYSQL_DATABASE blogging_web_app

WORKDIR /app

COPY blogging_web_app.sql /app/blogging_web_app.sql
COPY todo /app/todo
