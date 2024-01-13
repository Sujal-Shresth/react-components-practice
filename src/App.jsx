import "./App.css";
import GallaryFooter from "./components/GallaryFooter";
import Body from "./components/Body";
import Header from "./components/Header";
import imageData from "./components/data";

function App() {
  return (
    <div>
      <Header />
      <Body data={imageData} />
      <GallaryFooter />
    </div>
  );
}

export default App;
