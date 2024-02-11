import { Schema, model } from "mongoose";
import { Movie } from "../../interface";

type MovieSearchSchemaData = {
  key: string;
  movies: Movie[][];
  updatedAt: Date;
};

const MovieSearchSchema = new Schema<MovieSearchSchemaData>(
  {
    key: String,
    movies: Object,
  },
  { timestamps: true }
);

export const MovieSearch = model<MovieSearchSchemaData>(
  "MovieSearch",
  MovieSearchSchema
);
