FROM postgres:12-alpine

EXPOSE 5432
COPY init_schema.sql /docker-entrypoint-initdb.d/
