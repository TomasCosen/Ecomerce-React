import datas from "../data/lista.json";

const getDatas = () => {
  const list = datas.map((data) => ({
    id: data.id,
    name: data.name,
    price: data.price,
    description: data.description,
    descriptionExt: data.descriptionExt,
    category: data.category,
    macro: data.Macro,
    img: data.img,
  }));
  return list;
};
const getData = (id) => {
  return datas.find((data) => data.id.toString() === id);
};

const createItem = (data) => {};

const removeItem = (id) => {};

const modifyItem = (id, data) => {};

export const itemService = {
  getDatas,
  getData,
  createItem,
  removeItem,
  modifyItem,
};
