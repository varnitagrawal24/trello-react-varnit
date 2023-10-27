import List from "./List";

function RenderList({ list, deleteList }) {
  return (
    <>
      {list.map((ele) => (
        <List key={ele.id} data={ele} handleDeleteList={deleteList} />
      ))}
    </>
  );
}

export default RenderList;
