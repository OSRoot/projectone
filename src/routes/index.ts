import express from "express";
import body from "./../../front/index";
import resizeRoute from "./api/resizeApi";
// import body2 from "../../front/resized";
import { Request, Response } from "express";

const routes = express.Router();

routes.get("/", (req: Request, res: Response): void => {
  res.status(200).send(body);
  console.log(`you are in ${req.url} route`);
});
routes.use("/", resizeRoute);
export default routes;
