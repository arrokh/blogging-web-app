FROM	mariadb:10.3
LABEL	maintainer="Noor Octavian Anwar <@arrokh>"

ENV MYSQL_ROOT_PASSWORD <MYSQL_ROOT_PASSWORD>
ENV MYSQL_USER <MYSQL_USER>
ENV MYSQL_PASSWORD <MYSQL_PASSWORD>
ENV MYSQL_DATABASE <MYSQL_DATABASE>

WORKDIR /app

COPY blogging_web_app.sql /app/blogging_web_app.sql
COPY init.sh /app/init.sh

RUN chmod a+x init.sh
