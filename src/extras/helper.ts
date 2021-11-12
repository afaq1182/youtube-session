
export class Helper {
    static customFileName(req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      let fileExtension = "";
       if(file.mimetype.indexOf("jpeg") > -1){
          fileExtension = "jpg"
          const originalName = file.originalname.split(".")[0];
      cb(null, originalName + '-' + uniqueSuffix+"."+fileExtension);
       }
      else if(file.mimetype.indexOf("png") > -1){
          fileExtension = "png";
          const originalName = file.originalname.split(".")[0];
      cb(null, originalName + '-' + uniqueSuffix+"."+fileExtension);
      }
      else
      {
        //cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        //cb(new Error(`The File Type is not supported \n File Type: ${file.mimetype}`));
      }
      }
    
    static destinationPath(req, file, cb) {
      cb(null, "C:\\Users\\afaq\\Documents\\youtube-session\\dist\\moduleuploads")
    }
  }