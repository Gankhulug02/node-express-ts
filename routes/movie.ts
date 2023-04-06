import express, { Router } from "express";
import { getMovies, getMovie } from "../contollers/movie";

const router = Router();

router.route("/").get(getMovies);
router.route("/:id").get(getMovie);

export default router;
