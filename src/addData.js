// for adding data.........
const addItem = (items, setItems, inputValue, setInputValue) => {
    setItems([...items, inputValue]);
    setInputValue("");
  };
export default addItem;