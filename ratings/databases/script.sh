#!/bin/sh

set -e
mongoimport --host localhost --db $MONGODB_DATABASE --username $MONGODB_USERNAME --password $MONGODB_PASSWORD \
  --collection ratings --drop --file /docker-entrypoint-initdb.d/ratings_data.json
