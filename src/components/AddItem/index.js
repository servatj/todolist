
import { useState } from 'react';

const AddItem = ({ addItem }) => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState(0);

  const isValid = (item) => {
    return item.task !== "" && item.priority !== -1;
  }

  const addValidateItem = () => {
    const newItem = { task, priority };
    if (isValid(newItem)) {
      addItem(newItem);
    }
    setTask('');
    setPriority(0);
  }

  return (
    <table>
      <tbody>
        <tr key={""}>
          <td>Task:</td>
          <td>
            <input
              id="task"
              type="text"
              placeholder="Enter task here"
              onChange={(evt) => setTask(evt.target.value)}
            />
          </td>
          <td>Priority:</td>
          <td>
            <input
              id="prioity"
              type="text"
              placeholder="Enter priority here"
              onChange={(evt) => setPriority(parseInt(evt.target.value))}
            />
          </td>
          <td>
            <input id="submit" type="submit" onClick={addValidateItem} />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default AddItem;
