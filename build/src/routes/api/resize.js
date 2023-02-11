"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { promises as fsPromises } from "fs";
const fs_1 = __importDefault(require("fs"));
const resized_1 = __importDefault(require("../../../front/resized"));
// using sharp for resizing images
const sharp_1 = __importDefault(require("sharp"));
const resizeRoute = express_1.default.Router();
// check the following :
// 1- directory exists;  solved
// 2- file exist;        What if i want to save multiple files
resizeRoute.get("/images", (req, res) => {
    // destruct the url prameters into variables
    const { filename, width, height } = req.query;
    // resizing fuction
    const resizeImage = () => __awaiter(void 0, void 0, void 0, function* () {
        // set variables to the thumbnails folder and output image;
        const thumbPath = `${__dirname}./../../../images/thumbnails`;
        const path = `${__dirname}./../../../images/${filename}.jpg`;
        // check if source image exists
        if (fs_1.default.existsSync(path)) {
            console.log("Source image: File exist");
        }
        else {
            console.log("Error: please Check the path");
        }
        try {
            // await fsPromises.mkdir(thumbPath);
            // create file after checking its existence
            if (!fs_1.default.existsSync(thumbPath)) {
                fs_1.default.mkdirSync(thumbPath);
            }
            // handle wrong parameter
            // if (!filename || !width || !height) {
            //   res.send(`<h1 style="color:red; text-align:center; padding:100px">The accepted Parameters are: filename, width and height
            //   please check the parameters spelling</h1>`);
            //   return;
            // }
            if (isNaN(parseInt(width))) {
                res.send(`<div style="text-align:center; color:red; display:flex; justify-conttent:space-between;"> <h1>Opps , the width is typped like that: eg. width=700</h1> 
        <a href="http://localhost:3000/myapi">go back</a>
        `);
                return;
            }
            else if (isNaN(parseInt(height))) {
                res.send(`<div style="text-align:center; color:red; display:flex; justify-conttent:space-between;"> <h1>Opps , the height is typped like that: eg. height=1000</h1> 
        <a href="http://localhost:3000/myapi">go back</a>
        `);
                return;
            }
            else {
                res.send(resized_1.default);
            }
            // resizing the image with sharp module
            yield (0, sharp_1.default)(path)
                .resize(parseInt(width), parseInt(height))
                .toFile(`${__dirname}./../../../images/thumbnails/out_.jpg`);
            if (`${__dirname}./../../../images/thumbnails/out_.jpg`) {
                res.send(resized_1.default);
                return;
            }
            res.send();
        }
        catch (err) {
            console.log(err);
        }
        res.send(resized_1.default);
        return;
    });
    // run the function when endpint is called
    resizeImage();
});
exports.default = resizeRoute;
