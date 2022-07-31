import { v4 as uuidv4 } from "uuid";

export const basicColorData = () => {
  return [
    {
      background: "#ff0000",
      name: "Red",
      id: uuidv4(),
    },
    {
      background: "#ffff00",
      name: "Yellow",
      id: uuidv4(),
    },
    {
      background: "#0000ff",
      name: "Blue",
      id: uuidv4(),
    },
    {
      background: "#800080",
      name: "Purple",
      id: uuidv4(),
    },
    {
      background: "#ff6d0a",
      name: "Orange",
      id: uuidv4(),
    },
  ];
};

export const preMadeColorData = () => {
  return [
    {
      background: "#98a7fd",
      name: "Light Blue",
      id: uuidv4(),
    },
    {
      background: "#ff7676",
      name: "Light Red",
      id: uuid(),
    },
  ];
};
