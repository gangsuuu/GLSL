import Header from "./Components/Basic/Header";
import Canvas from "./Components/Canvas/Canvas";
import '../src/styles/abstracts/main.css'
import ContentNav from "./Components/Canvas/ContentNav";
import { useEffect, useState } from "react";
import ItemLists from "./Components/Component/ItemLists";

function App() {
  let [header,setHeader] = useState(true)
  function showHeader() {
    setHeader(!header)
  }

  return (
    <>
      <Header
        header ={header}
      >
      </Header>
      <Canvas>
      </Canvas>
      <ContentNav
        showHeader={() => showHeader()}
      ></ContentNav>
      <ItemLists></ItemLists>
    </>
  );
}

export default App;
