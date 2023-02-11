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
const resizUtil_1 = __importDefault(require("../../utils/resizUtil"));
const fs_1 = __importDefault(require("fs"));
// import path from "path";
const resizeRoute = express_1.default.Router();
resizeRoute.get("/images", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
        const file = fs_1.default.existsSync(path);
        // handle wrong parameter
        if (!filename || !width || !height) {
            res.send(`<h1 style="color:red; text-align:center; padding:100px">The accepted Parameters are: filename, width and height 
      please check the parameters</h1>`);
            return;
        }
        if (!file) {
            yield (0, resizUtil_1.default)(filename, +width, +height);
        }
        const src = `http://localhost:3000/cache/${width}_${height}_${filename}.jpg`;
        res.send(`<img src="${src}"/>`);
    }
    catch (error) {
        next(error);
    }
}));
exports.default = resizeRoute;
