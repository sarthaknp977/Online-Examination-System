import mongoose from "mongoose";
const resultSchemaIndividual = new mongoose.Schema({
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "question",
  },
  selectedAnswer: {
    type: String,
    required: true,
  },

  isCorrect: {
    type: Boolean,
    default: false,
  },
  score: {
    type: Number,
    default: 0,
  },
});
export const resultModelIndividual = mongoose.model(
  "result_individual",
  resultSchemaIndividual
);

const resultSchemaOverall = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "registration_detail",
    validate: {
      validator: async function (studentId) {
        // Fetch the referenced document and check if the userRole is 'student'
        const registrationDetail = await mongoose
          .model("registration_detail")
          .findById(studentId);
        return registrationDetail && registrationDetail.userRole === "student";
      },
      message: "The referenced user is not a student.",
    },
  },
  questionResults: [resultSchemaIndividual],
  totalScore: {
    type: Number,
    required: true,
    default: 0,
  },
  percentage: {
    type: Number,
    default: null,
  },
  status: {
    type: String,
    enum: ["Pass", "Fail"],
    default: null,
  },
});
export const resultModelOverall = mongoose.model(
  "result_overall",
  resultSchemaOverall
);
