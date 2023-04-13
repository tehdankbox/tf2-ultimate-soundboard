import voiceJSON from "./voice.json";

export default {
  voice: voiceJSON,
};

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

  console.log([file, text]);
  return [file, text];
};

export const loadFilesFromCategory = (className, voiceline) => {
  let voicelinePath = "";
  // separa o índice a ser acessado em um array
  if (voiceline.includes("/")) {
    voicelinePath = voiceline.split("/");
  }

  console.log(voicelinePath);

  // acessa o objeto de acordo com o índice
  let accessedObj = voiceJSON[className];
  voicelinePath.forEach((level) => {
    accessedObj = accessedObj[level];
  });
  console.log(accessedObj);

  return accessedObj;
};

export const loadFilesFromTab = (className, tabName) => {
  // acessa o objeto de acordo com o índice
  let accessedObj = voiceJSON[className][tabName];

  let accessedArray = Object.keys(accessedObj).map((e) => {
    return accessedObj[e];
  });

  return accessedArray;
};

export const findPath = (className, voiceline) => {
  return `src/assets/sound/vo/${className}/${voiceline}.mp3`; // path to file
};
