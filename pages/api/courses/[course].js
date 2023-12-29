import courses from "../../../data/courses";

// import { cors, runMiddleware } from "../../../backend-functions/middlewares";

// Initializing the cors middleware

export default async function handler(req, res) {
  //   await runMiddleware(req, res, cors);

  const courseName = req.query.course;

  const course = courses.find((item) => item.slug == courseName);

  res.status(200).json(course);
}
