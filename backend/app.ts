import express from "express";
import cors from "cors";
import { getMovies } from "./actions/getMovies";
import { validateGetMoviesParameters } from "./lib/validateInputString";
import { ValidationError, ExternalApiCallError } from "./lib/customErrrors";

const PORT = 3002;

const app = express();

app.use(cors());

app.get("/movies", async function (req, res) {
  try {
    const searchText = validateGetMoviesParameters(req.query.searchText);
    const responseData = await getMovies(searchText);
    res.send(responseData);
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(400).send("Invalid Query Parameter!");
    }
    if (error instanceof ExternalApiCallError) {
      res.status(502).send("External API is unavailable!");
    }
    res.status(500).send("Internal Server Error!");
  }
});

app.listen(PORT);
console.log(`App listening at port ${PORT}!`);
