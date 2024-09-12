import mongoose from "mongoose";

const questionInfo = new mongoose.Schema(
  {
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "registration_detail",
      validate: {
        validator: async function (teacher) {
          const registrationDetail = await mongoose
            .model("registration_detail")
            .findById(teacherId);
          return (
            registrationDetail && registrationDetail.userRole === "teacher"
          );
        },
        message: "The referenced user is not a teacher.",
      },
    },
    questions: [{ type: mongoose.Types.Schema.ObjectId, default: [] }],
  },
  { timestamps: true }
);

export default mongoose.model("question_info", questionInfo);
