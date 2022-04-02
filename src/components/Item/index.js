export const Item = ({ item, index }) => {
  return (
    <>
      <tr
        key={`${item.task}_${item.priority}`}
        style={{ backgroundColor: index % 2 === 0 ? "#dddddd" : "white" }}
      >
        <td>{item.task}</td>
        <td>{item.priority}</td>
      </tr>
    </>
  );
};

export default Item;
