FROM mongo:4.2.11

COPY ./init.js /docker-entrypoint-initdb.d/
