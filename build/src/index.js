"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
// inttialize the app
const myapp = (0, express_1.default)();
const port = 3000;
// use the main route and express.static() to access my media
myapp.use("/myapi", index_1.default);
myapp.use(express_1.default.static("images"));
// listen to everything happens ....
myapp.listen(port, () => {
    console.log(`Server Started Successfully at http://localhost:${port}/myapi...`);
});
exports.default = myapp;
