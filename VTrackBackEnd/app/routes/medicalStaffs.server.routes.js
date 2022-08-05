// import medical staff controller
const medicalStaff = require("../controllers/medicalStaffs.server.controller");

module.exports = (app) => {

    app.post("/api/medicalStaff", medicalStaff.createMedicalStaffTest);
    app.get("/api/getAllMedicalStaffs/:clinicId", medicalStaff.getMedicalStaffsByClinicId);


};
