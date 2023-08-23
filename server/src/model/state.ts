import mongoose from "mongoose";

const StateSchema = new mongoose.Schema<stateInterface>({
  name: { type: String },
});

const StateModel = mongoose.model("state", StateSchema);

interface stateInterface extends mongoose.Document {
  name: string;
}

export default StateModel;
