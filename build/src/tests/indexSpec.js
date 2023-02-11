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
const supertest_1 = __importDefault(require("supertest"));
const resizUtil_1 = __importDefault(require("../utils/resizUtil"));
const resizeApi_1 = __importDefault(require("../routes/api/resizeApi"));
const fs_1 = __importDefault(require("fs"));
// check the availability of my endpint
const request = (0, supertest_1.default)(resizeApi_1.default);
describe("Testing End point :", () => {
    it("Gets the Endpoint: /images", () => __awaiter(void 0, void 0, void 0, function* () {
        yield resizeApi_1.default.get("/images", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
            expect(res.statusCode).toEqual(200);
        }));
    }));
});
it("Test Image resize Function:", () => __awaiter(void 0, void 0, void 0, function* () {
    yield resizeApi_1.default.get("/images", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const { filename, width, height } = req.query;
        try {
            const resize = yield (0, resizUtil_1.default)(filename, +width, +height);
            expect(resize).toBeDefined();
        }
        catch (err) {
            throw expect(err);
        }
    }));
}));
// Directory exists ?
it("The images directory is Exist: ", () => {
    expect(fs_1.default.existsSync(`${__dirname}./../../../images/`)).toBe(true);
});
