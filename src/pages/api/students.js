import { cors, runMiddleware } from "../../../backand/middlewares";
import students from "../../../data/students";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  res.status(200).json(students);
}
