import { Schema, model } from "mongoose";

interface Imovie {
  plot: String;
  genres: [String];
  runtime: Number;
  cast: [String];
  num_mflix_comments: Number;
  title: String;
  fullplot: String;
  languages: [String];
  released: Date;
  directors: [String];
  rated: String;
  awards: {
    wins: Number;
    nominations: Number;
    text: String;
  };
  lastupdated: String;
  year: Number;
  imdb: {
    rating: Number;
    votes: Number;
    id: Number;
  };
  countries: [];
  type: String;
  tomates: {
    viewer: {
      rating: Number;
      numReviws: Number;
      meter: Number;
    };
    lastUpdated: Date;
  };
}

const movieSchema = new Schema<Imovie>({});

const movie = model("Movie", movieSchema);

export default movie;
