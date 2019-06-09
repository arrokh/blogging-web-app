FROM       node:10.16.0-alpine
LABEL      maintainer="Noor Octavian Anwar <@arrokh>"

WORKDIR		/usr/app

COPY		package*.json ./
COPY		src ./
COPY		.gitignore ./
COPY		.env ./

RUN        yarn install

EXPOSE		8080

CMD [ "npm", "start" ]
