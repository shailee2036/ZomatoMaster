import AWS from "aws-sdk";

//AWS S3 bucket configuration
const s3Bucket = new AWS.S3({
  accessKeyId: "AKIAWIRUCJM7XOA4FJPK",
  secretAccessKey: "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",
  region: "ap-south-1"
});

export const s3Upload = (options) =>{
  return new Promise((resolve, reject)=>
    s3Bucket.upload(options, (error,data)=>{
      if(error) return reject(error);
      return resolve(data);
    })
  );
};
