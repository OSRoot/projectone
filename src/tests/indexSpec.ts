import supertest from "supertest";
import resizeImage from "../utils/resizUtil";
import resizeRoute from "../routes/api/resizeApi";
import fs from "fs";

// check the availability of my endpint
const request = supertest(resizeRoute);
describe("Testing End point :", (): void => {
  it("Gets the Endpoint: /images", async (): Promise<void> => {
    await resizeRoute.get("/images", async (req , res , next): Promise<void> => {
      expect(res.statusCode).toEqual(200);
    });
  });
});

it("Test Image resize Function:", async (): Promise<void> => {
  await resizeRoute.get("/images", async (req, res, next): Promise<void> => {
    const { filename, width, height } = req.query;
    try {
      const resize = await resizeImage(
        filename,
        +(width as string),
        +(height as string)
      );
      expect(resize).toBeDefined();
    } catch (err) {
      throw expect(err);
    }
  });
});

// Directory exists ?
it("The images directory is Exist: ", (): void => {
  expect(fs.existsSync(`${__dirname}./../../../images/`)).toBe(true);
});
