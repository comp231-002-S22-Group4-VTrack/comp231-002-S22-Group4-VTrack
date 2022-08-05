// import health Practitioner controller
const medicalStaff = require("../controllers/medicalStaffs.server.controller");

module.exports = (app) => {

    app.post("/api/medicalStaff", medicalStaff.createMedicalStaffTest);
    app.get("/api/getAllMedicalStaffs/:clinicId", medicalStaff.getMedicalStaffsByClinicId);

    // app.route("/api/getHealthPractionerDetails/:practitionerId")
    // .get(medicalStaff.getMedicalStaffDetails)
    // .put(medicalStaff.updateMedicalStaffDetails);
    

    // app.param("practitionerId", medicalStaff.getHealthPracitionerById);

};
