import { Request, Response, NextFunction } from "express";
import Movie from "../model/movie";

const getMovies = async (req: Request, res: Response, next: NextFunction) => {
  const limit = Number(req.query.limit) || 10;
  const page = Number(req.query.page) || 0;

  const total = await Movie.countDocuments();
  const pageCount = Math.ceil(total / limit);
  const skip = (page - 1) * limit;
  try {
    const movies = await Movie.find({}).skip(skip).limit(limit);

    res.status(201).json({
      success: true,
      message: "movies мэдээлэл олдлоо.",
      movies,
      pagination: { total, pageCount, page },
    });
  } catch (error) {
    next(error);
  }
};

const getMovie = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const moviez = await Movie.findById(id);
  try {
    res
      .status(201)
      .json({ success: true, message: "movies мэдээлэл олдлоо.", moviez });
  } catch (error) {
    next(error);
  }
};

export { getMovies, getMovie };
