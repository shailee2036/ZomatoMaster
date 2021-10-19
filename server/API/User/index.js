import express from "express";

import {ReviewModel} from "../../database/allModels";

const Router = express.Router();

/*
Route            /
Des             get an user data
Params          _id
Body            none
Access           Public
Method           GET
*/

Router.get("/:_id", async(req,res)=>{
  try{
const {_id} = req.params;
const getUser = await UserModel.findById(_id);
return res.json ({user: getUser});
}

  }catch(error){
return res.status(500).json({error:error.message});
  }
});

/*
Route             /update
Des               update user data
Params            _userId
Access            Public
Method            GET
*/

Router.delete("/update/:_userId", async(req,res)=>{
  try{
const {userId} = req.params;
const {userData} = req.body;
const updateUserData = await UserModel.findByIdAndUpdate(
  userId,
  {
    $set: userData
  },
  {
    new:true
  }
);

}

  }catch(error){
return res.status(500).json({error:error.message});
  }
});

export default Router;
