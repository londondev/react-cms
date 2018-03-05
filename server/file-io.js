import fs from 'fs';

const readFile = (path) => new Promise((resolve, reject) => {
    fs.readFile(path,"utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });


  const saveFile= (path,content) => new Promise((resolve,reject) =>{
      fs.writeFile(path,content, (err)=>{
          if(err){
              console.log(`file:${path} couldn'be saved, err:${err}`);
              reject(err);
          }
          resolve();
      });
  });

  module.exports={
      readFile,
      saveFile
  }