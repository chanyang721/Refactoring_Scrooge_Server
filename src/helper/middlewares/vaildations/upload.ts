import aws, {config} from "aws-sdk";
import multer from "multer";
import {} from "express";

const s3 = new aws.S3({
    accessKeyId: config.s3.accessKeyId,
    secretAccessKey: config.s3.secretAccessKey,
    region: config.s3.region,
});
