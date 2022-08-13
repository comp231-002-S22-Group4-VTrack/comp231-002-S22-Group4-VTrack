//Development configuration options
module.exports = {
  //To sign the session identifier, use a secret string
  sessionSecret: "developmentSessionSecret",
  frontendDomain: "http://localhost:4200",
  db: "mongodb://Admin:Rosa2745@ac-6fmnkek-shard-00-00.odpzivr.mongodb.net:27017,ac-6fmnkek-shard-00-01.odpzivr.mongodb.net:27017,ac-6fmnkek-shard-00-02.odpzivr.mongodb.net:27017/?ssl=true&replicaSet=atlas-mmdsz6-shard-0&authSource=admin&retryWrites=true&w=majority",
  // local database
  // db: "mongodb://localhost/vacctrax-local",
  
  jwtSecretKey: "aPdSgVkYp3s5v8y/B?E(H+MbQeThWmZq",
  saltRounds: 10,
  // 18000 seconds = 5 hours
  emailJwtLifespan: 18000,
 
};