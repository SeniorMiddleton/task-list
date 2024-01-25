import Item from "./item";
// import item from "./item";

export default function List({ tasks }) {
  return (
    <ul>
      {tasks.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </ul>
  );
}
