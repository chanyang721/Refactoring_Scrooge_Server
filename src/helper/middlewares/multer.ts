// import multer from "multer";
// import multerS3 from "multer-s3";
// import AWS from "aws-sdk";

// const s3 = new AWS.S3({
//   region: "ap-northeast-2",
// });

// const storage = multerS3({
//   s3,
//   bucket: "scrooge_image_files",
//   contentType: multerS3.AUTO_CONTENT_TYPE,
//   acl: "public-read-write",
//   metadata: function (req, file, cb) {
//     cb(null, { fieldName: file.fieldname });
//   },
//   key: function (req, file, cb) {
//     cb(null, `uploads/${Date.now()}_${file.originalname}`);
//   },
// });

// const upload = multer({
//   storage,
//   limits: {
//     fieldNameSize: 200,
//     fieldSize: 1048576, //10Mb
//   },
//   fileFilter: (req, file, cb) => {
//     const acceptableExtensions = [".png", ".jpg"];
//   },
// });

// export default upload;
