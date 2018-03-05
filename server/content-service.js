import fileIo from './file-io';

const contentRootPath='./content/';

  const getContent=(filePath) => fileIo.readFile(contentRootPath + filePath + '.txt');
  const saveContent=(filePath, content) => fileIo.saveFile(contentRootPath + filePath + '.txt', content);

  module.exports={
    getContent,
    saveContent
  }