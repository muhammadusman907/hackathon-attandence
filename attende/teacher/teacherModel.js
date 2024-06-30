import mongoose from "mongoose";
const { Schema } = mongoose;

const teacherSchema = new Schema({
  name: String,
  email: String,
  courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
  batches: [{ type: Schema.Types.ObjectId, ref: 'Batch' }],
});


const Teacher = mongoose.models.Teacher || mongoose.model('Teacher', teacherSchema);
export default Teacher;
