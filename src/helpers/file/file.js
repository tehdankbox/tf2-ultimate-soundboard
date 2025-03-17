import voiceJSON from "./voice.json";

export default {
  voice: voiceJSON,
};

// não usado
export const findFile = (className, voiceline, number) => {
  let voicelinePath = "";
  // separa o índice a ser acessado em um array
  if (voiceline.includes("/")) {
    voicelinePath = voiceline.split("/");
  }

  // acessa o objeto de acordo com o índice
  let accessedObj = voiceJSON[className];
  voicelinePath.forEach((level) => {
    accessedObj = accessedObj[level];
  });

  let accessedKeys = Object.keys(accessedObj);
  let file = accessedKeys[number - 1];
  let text = accessedObj[file];

  // console.log([file, text]);
  return [file, text];
};

// não usado
export const loadFilesFromCategory = (className, voiceline) => {
  let voicelinePath = "";
  // separa o índice a ser acessado em um array
  if (voiceline.includes("/")) {
    voicelinePath = voiceline.split("/");
  }

  // console.log(voicelinePath);

  // acessa o objeto de acordo com o índice
  let accessedObj = voiceJSON[className];
  voicelinePath.forEach((level) => {
    accessedObj = accessedObj[level];
  });
  // console.log(accessedObj);

  return accessedObj;
};

// Duplica um objeto, pra poder remover o index dele
export const dupe = (obj) => {
  if (!obj) return {};
  const clearObj = JSON.parse(JSON.stringify(obj));
  delete clearObj.index;

  return clearObj;
}

// Carrega os arquivos de uma tab específica, ex: soldier/domination
// Contém todas as categorias dentro. Ex: soldier/domination/scout
export const loadFilesFromTab = (className, tabName) => {
  // acessa o objeto de acordo com o índice
  const accessedObj = dupe(voiceJSON[className][tabName]);

  let accessedArray = Object.keys(accessedObj).map((e) => {
    return accessedObj[e];
  });

  return accessedArray;
};

// Retorna array de objetos com o nome da tab e label
// Ex: [{ filename: domination, name: 'Domination'}];
export const loadTabsFromClass = (className) => {
  const tabs = dupe(voiceJSON[className]);

  const formattedTabs = Object.keys(tabs).map((e) => {
    return { filename: e, name: tabs[e].index }
  });

  return formattedTabs;
}

export const findPath = (className, voiceline) => {
  return `src/assets/sound/vo/${className}/${voiceline}.mp3`; // path to file
};
// copypaste helper
// : {
//         "index": "",
//       },


//       "heavy_01": "",
//       "heavy_02": "",
//       "heavy_03": "",
//       "heavy_04": "",
//       "heavy_05": "",
//       "heavy_06": "",
//       "heavy_07": "",
//       "heavy_08": "",
//       "heavy_09": "",
//       "heavy_10": "",
//       "heavy_11": "",
//       "heavy_12": "",
//       "heavy_13": "",
//       "heavy_14": "",
//       "heavy_15": "",
//       "heavy_16": "",
//       "heavy_17": "",
