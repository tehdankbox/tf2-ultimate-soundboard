import soldierJSON from "./soldier.json";

export default {
  soldier: soldierJSON,
};

export const findFile = (className, voiceline, number) => {
  let voicelinePath = "";
  // separa o índice a ser acessado em um array
  if (voiceline.includes("/")) {
    voicelinePath = voiceline.split("/");
  }

  // acessa o objeto de acordo com o índice
  let accessedObj = soldierJSON[className];
  voicelinePath.forEach((level) => {
    accessedObj = accessedObj[level];
  });

  let accessedKeys = Object.keys(accessedObj);
  let file = accessedKeys[number - 1];
  let text = accessedObj[file];

  console.log([file, text]);
  return [file, text];
};

export const loadAllFiles = (className, voiceline) => {
  let voicelinePath = "";
  // separa o índice a ser acessado em um array
  if (voiceline.includes("/")) {
    voicelinePath = voiceline.split("/");
  }

  // acessa o objeto de acordo com o índice
  let accessedObj = soldierJSON[className];
  voicelinePath.forEach((level) => {
    accessedObj = accessedObj[level];
  });

  return accessedObj;
};

export const findPath = (className, voiceline) => {
  return `src/assets/sound/vo/${className}/${voiceline}.mp3`; // path to file
};
