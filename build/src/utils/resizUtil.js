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
const sharp_1 = __importDefault(require("sharp"));
// import fs from "fs";
// import path from "path";
//  ############################################
//  ### resizing the image with sharp module ###
//  ############################################
const resizeImage = (filename, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // if (!fs.existsSync("./image/cache")){fs.mkdirSync("./images/cache")}
        // eslint-disable-next-line @typescript-eslint/no-inferrable-types
        const outFile = `./images/cache/${width}_${height}_${filename}.jpg`;
        const resizeImage = yield (0, sharp_1.default)("./images/" + filename + ".jpg")
            .resize(width, height)
            .toFile(outFile);
    }
    catch (error) {
        throw error;
    }
});
exports.default = resizeImage;
