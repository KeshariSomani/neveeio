const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const formSchema = new Schema(
  {

     name:String,
     phone_number:Number,
     email:String,
     city:String,
     date:String,
     time:String,
     starting_scooters:String,
     current_bussiness:String,
     message:String
  },
  {
    timestamps:true
  }
);

const franchiseModel = mongoose.model("franchsieModel", formSchema);

module.exports = franchiseModel;

