//Libraries
import express from "express";
import AWS from "aws-sdk";
import multer from "multer";

//Database
import {ImageModel} from "../../database/allModels";

import {s3Upload} from "../../Utilis/AWS/s3";

const Router = express.Router();

//multer config
const storage = multer.memoryStorage();
const upload = multer({storage});

//AWS S3 bucket configuration




/*
Route            /
Des              upload a given image to s3 bucket and then saving the file to db
Params           none
Access           Public
Method           GET
*/

Router.post("/", upload.single("file") ,async(req,res)=>{
  try{
const file = req.file;

//s3 bucket $options
const bucketOptions = {
  Bucket: "shapeai2036",
  Key: file.originalname,
  Body: file.buffer,
  ContentType: file.Minetype,
  ACL: "public-read"

};


const uploadImage = await s3Upload(bucketOptions);

  }catch(error){
return res.status(500).json({error:error.message});
  }
});

export default Router;
