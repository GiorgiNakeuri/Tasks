import React from "react";
import { Header } from "./header/header";
import { Timeline } from "./timeline/timeline";
import { MainBody } from "./mainBody/mainBody";

function App() {
  return (
    <div id="app-wrapper">
      <Header />
      <div style={{ display: "flex" }}>
        <Timeline />
        <MainBody />
      </div>
    </div>
  );
}

export default App;
