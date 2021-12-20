import multer from "multer";
import multerS3 from "multer-s3";
import AWS from "aws-sdk";
import config from "../../config";

const s3 = new AWS.S3(config.s3);

const storage = multerS3({
  s3,
  bucket: config.multerS3.bucket,
  contentType: multerS3.AUTO_CONTENT_TYPE,
  acl: config.multerS3.acl,
  metadata: function (req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key: function (req, file, cb) {
    cb(null, `images/${Date.now()}_${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowType = [".png", ".jpg", ".jpeg"];
  const fileType = req.file;
};

const limits = {
  fieldNameSize: 200,
  fieldSize: 16777216, //16Mb
  files: 5,
  fields: 10,
};

const upload = multer({
  storage,
  limits,
  // fileFilter
});

export default upload;
