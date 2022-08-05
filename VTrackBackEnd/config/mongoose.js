// Load the module dependencies
const config = require("./config");
const mongoose = require("mongoose");

// Define the Mongoose configuration method
module.exports = function () {
    // Use Mongoose to connect to MongoDB
    const db = mongoose
        .connect(config.db, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        .then(() => console.log("DB Connected!"))
        .catch((err) => {
            console.log("Error", err);
        });

    // Load the db models
    require("../app/models/clinic.server.model");
    require("../app/models/address.server.model");
    require("../app/models/appointment.server.model");
    require("../app/models/medicalStaff.server.model");
    require("../app/models/patient.server.model");
    require("../app/models/vaccine.server.model");
    require("../app/models/inventory.server.model");
    require("../app/models/account.server.model");
    require("../app/models/requestAppointment.server.model");
  // Return the Mongoose connection instance
  return db;
};
