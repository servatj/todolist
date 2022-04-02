import Table from './components/Table';
import { useEffect, useState } from 'react';
import AddItem from './components/AddItem';

const isPartOf = (item, items) => {
  return items.some((it) => it.priority === item.priority);
};

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    if (isPartOf(item, items)) {
      alert(`Item with priorirty: ${item.priority} exists`);
      return;
    }
    setItems([...items, item]);
  }

  useEffect(() => {
    const sortedItems = [
      { task: "Task 1", priority: 1 },
      { task: "Task 2", priority: 2 }
    ]

    const sortItems = (items) => {
      return items.sort((i1, i2) => i1.priority - i2.priority);
    };

    setItems(sortItems(sortedItems));
  }, []);

  return (
    <>
      <h1>Todo List</h1>
      <AddItem addItem={addItem} />
      <Table sortedItems={items}/>
    </>
  );
}

export default App;
