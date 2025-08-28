// import multer from "multer";
// import path from "path";

// // Storage settings
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname)); // unique name
//   }
// });

// // File filter (only images)
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = /jpeg|webp|jpg|png|gif/;
//   const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());
//   if (ext) {
//     cb(null, true);
//   } else {
//     cb(new Error("Only images are allowed!"));
//   }
// };

// const upload = multer({ storage, fileFilter });

// export default upload;


import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Assuming your uploads folder is at the project root, same level as "src"
const uploadPath = path.resolve(__dirname, "../../uploads");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // unique name
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|webp|jpg|png|gif/;
  const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  if (ext) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed!"));
  }
};

const upload = multer({ storage, fileFilter });

export default upload;

