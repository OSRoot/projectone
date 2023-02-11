import express from "express";
import routes from "./routes/index";

// inttialize the app

const myapp = express();
const port = 3000;

// use the main route and express.static() to access my media
myapp.use("/myapi", routes);
myapp.use(express.static("images"));

// listen to everything happens ....
myapp.listen(port, (): void => {
  console.log(
    `Server Started Successfully at http://localhost:${port}/myapi...`
  );
});

export default myapp;
