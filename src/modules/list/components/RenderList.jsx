import List from "./List";

function RenderList({ list, deleteFuncton }) {
  return (
    <>
      {list.map((ele) => (
        <List key={ele.id} data={ele} deleteFunction={deleteFuncton} />
      ))}
    </>
  );
}

export default RenderList;
