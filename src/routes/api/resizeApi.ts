import express from "express";
import resizeImage from "../../utils/resizUtil";
import fs from "fs";
import { Request, Response } from "express";

// import path from "path";
const resizeRoute = express.Router();
resizeRoute.get("/images", async (req:Request, res: Response, next): Promise<void> => {
  res.status(200);
  try {
    const { filename, width, height } = req.query;
    if (!filename)
      throw {
        err: "file name is required",
        status: 400,
      };

    // check if file exists before:
    const path = `./images/cache/${width}_${height}_${filename}.jpg`;
    const file = fs.existsSync(path);

    // handle wrong parameter
    if (!filename || !width || !height) {
      res.send(`<h1 style="color:red; text-align:center; padding:100px">The accepted Parameters are: filename, width and height 
      please check the parameters</h1>`);
      return;
    }

    if (!file) {
      await resizeImage(filename, +(width as string), +(height as string));
    }

    const src = `http://localhost:3000/cache/${width}_${height}_${filename}.jpg`;
    res.send(`<img src="${src}"/>`);
  } catch (error) {
    next(error);
  }
});

export default resizeRoute;
