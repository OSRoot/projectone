import sharp from "sharp";
// import fs from "fs";
// import path from "path";
//  ############################################
//  ### resizing the image with sharp module ###
//  ############################################

const resizeImage = async (
  filename: string | unknown,
  width: number | null,
  height: number | null
): Promise<void> => {
  try {
    // if (!fs.existsSync("./image/cache")){fs.mkdirSync("./images/cache")}
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    const outFile:string = `./images/cache/${width}_${height}_${filename}.jpg`;
    const resizeImage = await sharp("./images/" + filename + ".jpg")
      .resize(width, height)
      .toFile(outFile);
  } catch (error) {
    throw error;
  }
};

export default resizeImage;
