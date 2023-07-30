const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const formSchema = new Schema(
  {

     name:String,
     phone_number:Number,
     email:String,
     whatsapp_number:Number,
     message:String,
     location:String
  },
  {
    timestamps:true
  }
);

const quickenquiryModel = mongoose.model("quickenquiryModel", formSchema);

module.exports = quickenquiryModel;

