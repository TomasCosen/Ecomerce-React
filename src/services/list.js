import datas from "../data/lista";

const getDatas = () => {
  const list = datas.map((data) => ({
    id: data.id,
    name: data.name,
    price: data.price,
    description: data.description,
    descriptionExt: data.descriptionExt,
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
