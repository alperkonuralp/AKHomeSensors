cd ..\..\src\server

docker build -t alper/ak-home-sensors-webapi .

docker run -p 48160:8080 -e MONGO_HOST=192.168.147.22 --name ak-home-sensors-webapi -d alper/ak-home-sensors-webapi

cd ..\..\docker\app
