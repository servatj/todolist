import Item from "../Item";
import './style.css';

const Table = ({ sortedItems }) => {
  return (
    <table>
      <thead>
        <tr key={`task_prioirity`}>
          <th>Task</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody>
          {sortedItems.map((item, index) => (
            <Item key={index} item={item} index={index} />
          ))}
        </tbody>
    </table>
  );
};

export default Table;
