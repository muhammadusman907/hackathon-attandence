import mongoose from "mongoose";
const { Schema } = mongoose;

const studentSchema = new Schema({
  name: String,
  email: String,
  courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
});


// Check if the model already exists to prevent redefinition
const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);

export default Student;