docker build --no-cache -f SQL\Dockerfile.PostgreSql -t pr-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t pr-java/app ../../..
