const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MedicalStaffSchema = new Schema({
    account: {
        type: Schema.Types.ObjectId,
        ref: 'Account'
    },
    clinic: {
        type: Schema.Types.ObjectId,
        ref: 'Clinic'
    }
});
MedicalStaffSchema.set("toJSON", {
    getters: true,
    virtuals: true,
});

// Create the 'HeatlhPractitioner' model out of the 'HeatlhPractitionerSchema'
mongoose.model("MedicalStaff", MedicalStaffSchema, "medicalStaffs");
