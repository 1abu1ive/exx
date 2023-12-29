// import { runMiddleware, cors } from "../../backend-functions/middlewares";
import courses from "../../data/courses";

export default async function handler(req, res) {
  // await runMiddleware(req, res, cors);

  res.status(200).json(courses);
}
