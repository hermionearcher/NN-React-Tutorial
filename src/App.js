import "./styles.css";

export default function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  return (
    <div className="App">
      <div className="conent">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p></p>
      </div>
    </div>
  );
}
