Local Project setup

Recommended approach:
use my online database instance (you won't have to enter the data into the database this way).
- rename the .env.example to .env 
- install node modules by running `npm install` in terminal
- run `npm run dev`

another approach (using Docker):
- run a docker container with `docker run --name postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5430:5432 -d postgres` (considering the default username is postgres)
- use the commented url in the .env.exmaple file
- install node modules by running `npm install` in terminal
- run `npm run dev`
