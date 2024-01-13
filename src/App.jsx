import "./App.css";
import GallaryFooter from "./components/GallaryFooter";
import Body from "./components/Body";
import Header from "./components/Header";

function App(props) {
  return (
    <div>
      <Header />
      <Body data={props.data} />
      <GallaryFooter />
    </div>
  );
}

export default App;
