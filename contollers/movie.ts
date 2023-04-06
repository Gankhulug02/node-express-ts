import { Request, Response, NextFunction } from "express";
import Movie from "../model/movie";

const getMovies = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const movies = await Movie.find({}).limit(100);
    if (!movies) {
      res
        .status(200)
        .json({ success: true, message: "movies мэдээлэл хоосон байна." });
    }

    res
      .status(201)
      .json({ success: true, message: "movies мэдээлэл олдлоо.", movies });
  } catch (error) {
    next(error);
  }
};

export { getMovies };
