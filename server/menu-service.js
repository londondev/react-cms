import fileIo from './file-io';

const menuPath='./menu/menu.json';

  const getMenu=() => fileIo.readFile(menuPath);
  const saveMenu=(menu) => fileIo.saveFile(menuPath, menu);

  module.exports={
      getMenu,
      saveMenu
  }