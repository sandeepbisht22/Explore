import mongoose from "mongoose";

const CitySchema = new mongoose.Schema<cityInterface>({
  name: { type: String },
  coordinates: {
    longitude: Number,
    latitude: Number,
  },
  state: { type: String },
});

const CityModel = mongoose.model("city", CitySchema);

interface cityInterface extends mongoose.Document {
  name: string;

  coordinates: {
    longitude: number;
    latitude: number;
  };
  state: string;
}

export default CityModel;
