import { useState } from "react";

const usePostStorage = (storageName) => {
  let itemData = [];
  const ISSERVER = typeof window === "undefined";

  if (!ISSERVER) {
    itemData = localStorage.getItem(storageName);
    try {
      itemData = itemData ? JSON.parse(itemData) : [];
    } catch (error) {}
  }
  const [items, setItems] = useState(itemData);

  const saveLocalStorage = (data) => {
    setItems(data);
    const stringifydata = JSON.stringify(data);
    localStorage.setItem(storageName, stringifydata);
  };

  const getLocalId = () => {
    const id = items.length > 0 ? items[items.length - 1].idLocal + 1 : 1;
    return id;
  };

  const toggleItem = (id) => {
    let newItems;
    if (!items.includes(id)) newItems = [...items, id];
    else newItems = items.filter((item) => item != id);
    saveLocalStorage(newItems);
  };

  const addItem = (post) => {
    let newItems = [];
    newItems = [
      ...items,
      {
        idLocal: getLocalId(),
        ...post,
      },
    ];

    saveLocalStorage(newItems);
  };

  const deleteItem = (localId) => {
    const newItems = items.filter((item) => {item.localId != localId});
    console.log(newItems, localId);
    saveLocalStorage(newItems);
  };

  return [items, addItem, deleteItem];
};

export default usePostStorage;
