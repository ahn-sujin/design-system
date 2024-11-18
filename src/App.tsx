import TagList from "./components/TagList";

function App() {
  const data = ["자바스크립트", "타입스크립트", "리액트"];

  return (
    <div className="bg-primary">
      <TagList tagList={data} onTagClick={(item) => console.log(item)} />
    </div>
  );
}

export default App;
