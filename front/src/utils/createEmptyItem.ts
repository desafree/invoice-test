import generateKey from "./generateKey";

function createEmptyItem() {
  return {
    name: "",
    quantity: 0,
    price: 0,
    id: generateKey(),
  };
}

export default createEmptyItem;
