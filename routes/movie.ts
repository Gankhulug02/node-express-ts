import express, { Router } from "express";
import { getMovies } from "../contollers/movie";

const router = Router();

router.route("/").get(getMovies);

export default router;
