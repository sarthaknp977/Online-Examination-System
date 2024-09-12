import mongoose from "mongoose";
const questionSchema = new mongoose.Schema({
  noOfQuestions: {
    type: Number,
    required: true,
  },
  questionText: {
    type: String,
    required: true,
  },
  options: [
    {
      optionText: {
        type: String,
        required: true,
      },
    },
  ],
  correctAnswer: {
    type: String,
    required: true,
  },
  marks: {
    type: Number,
    default: 1,
  },
});
export const questionModel = mongoose.model("question", questionSchema);
