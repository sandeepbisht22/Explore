import mongoose from "mongoose";

const placeSchema = new mongoose.Schema<placeInterface>({
  name: { type: String },
  coordinates: {
    longitude: Number,
    latitude: Number,
  },
  state: { type: String },
});

const PlaceModel = mongoose.model("place", placeSchema);

interface placeInterface extends mongoose.Document {
  name: string;

  coordinates: {
    longitude: number;
    latitude: number;
  };
  state: string;
}

export default PlaceModel;
