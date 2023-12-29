// import { runMiddleware, cors } from "../../backend-functions/middlewares";
import students from "../../data/students";

export default async function handler(req, res) {
  // await runMiddleware(req, res, cors);

  res.status(200).json(students);
}
