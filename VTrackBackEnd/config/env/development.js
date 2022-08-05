//Development configuration options
module.exports = {
  //To sign the session identifier, use a secret string
  sessionSecret: "developmentSessionSecret",
  frontendDomain: "http://localhost:4200",
  db: "mongodb://Admin:Rosa2745@ac-6fmnkek-shard-00-00.odpzivr.mongodb.net:27017,ac-6fmnkek-shard-00-01.odpzivr.mongodb.net:27017,ac-6fmnkek-shard-00-02.odpzivr.mongodb.net:27017/?ssl=true&replicaSet=atlas-mmdsz6-shard-0&authSource=admin&retryWrites=true&w=majority?directConnection=true",
  // local database
  // db: "mongodb://localhost/vacctrax-local",
  sendgridApiKey:
    "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",
  jwtSecretKey: "aPdSgVkYp3s5v8y/B?E(H+MbQeThWmZq",
  saltRounds: 10,
  // 18000 seconds = 5 hours
  emailJwtLifespan: 18000,
  // pointing to local host 4200
  // sendgridTemplateId: "d-3bb3a65537e84f5885904cc76850f25d",
  //pointing to deployed version of website
  // sendgridTemplateId: "d-88f93b2362d74145969c998beeb74beb"
  // new templte from new account due to suspension of older account
  sendgridTemplateId: "d-6fcdf2b1b5bb4030831560fa3dea295b",
};




