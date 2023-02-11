"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./../../front/index"));
const resizeApi_1 = __importDefault(require("./api/resizeApi"));
const routes = express_1.default.Router();
routes.get("/", (req, res) => {
    res.status(200).send(index_1.default);
    console.log(`you are in ${req.url} route`);
});
routes.use("/", resizeApi_1.default);
exports.default = routes;
