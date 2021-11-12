import { BadRequestException } from "@nestjs/common";
import e from "express";
import { ValidFileTypes } from "./Upload-Type.enum";

export class Helper {

    //not solved till now
    static readonly ValidUploadFileTypes =
    [
        ValidFileTypes.TYPE_JPEG,
        ValidFileTypes.TYPE_PNG
    ]
    static customFileName(req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      let fileExtension = "";
    //   file.mimetype.forEach((element,index) => {
    //     if(element == ValidFileTypes)
    //     {
    //         validtype = element;
    //     }

    //   });
    //   console.log("Pakistan : "+validtype);
    //   if(validtype != undefined)
    //   {
    //       fileExtension = validtype;
          
    //   }
    //   else
    //   {
    //       //cb(new Error('This file type is not allowed to uploaded'));
    //       throw new BadRequestException('Wrong File Type...!!!');
    //   }
       if(file.mimetype.indexOf("jpeg") > -1){
          fileExtension = "jpg"
      // }else if(file.mimetype.indexOf("program") > -1)
      // {
      //   cb(new Error('This file type is not allowed to uploaded'));
      // }
      // else if(file.mimetype.indexOf("zip") > -1)
      // {
      //   cb(new Error('This file type is not allowed to uploaded'));
      // }
      // else if(file.mimetype.indexOf("exe") > -1)
      // {
      //   cb(new Error('This file type is not allowed to uploaded'));
      // }
       }
      else if(file.mimetype.indexOf("png") > -1){
          fileExtension = "png";
      }
      // else if(file.mimetype.indexOf("jpeg") < -1)
      // {
      //     console.log("jpeg")
      //     fileExtension = "jpg";
      //  }
      else{
        cb(new Error('The File Type is not supported'));
      }
    const originalName = file.originalname.split(".")[0];
    cb(null, originalName + '-' + uniqueSuffix+"."+fileExtension);
    }
    
   
    static destinationPath(req, file, cb) {
      cb(null, "C:\\Users\\afaq\\Documents\\youtube-session\\dist\\modulesuploads")
    }
  }