import mongoose from "mongoose";

const placeSchema = new mongoose.Schema<placeInterface>({
  name: { type: String },
  coordinates: {
    longitude: Number,
    latitude: Number,
  },
});

const PlaceModel = mongoose.model("place", placeSchema);

interface placeInterface extends mongoose.Document {
  name: string;

  coordinates: {
    longitude: number;
    latitude: number;
  };
}

export default PlaceModel;
