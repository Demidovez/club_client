import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <p>{process.env.REACT_APP_TEST}</p>
    </div>
  );
}

export default App;
