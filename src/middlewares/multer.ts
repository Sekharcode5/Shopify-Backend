import multer from "multer";
import { v4 as uuid } from "uuid";

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "uploads");
  },
  filename(req, file, callback) {
    const id = uuid();
    const extName = file.originalname.split(".").pop();
    callback(null, `${id}.${extName}`);
  },
});
const memoryStorage = multer.memoryStorage();

export const singleUpload = multer({ storage }).single("photo");
export const singleUploadToMemory = multer({ storage: memoryStorage }).single("photo");