import generateKey from "../../_shared/utils/generateKey";

function createEmptyItem() {
  return {
    name: "",
    quantity: 0,
    price: 0,
    id: generateKey(),
  };
}

export default createEmptyItem;
