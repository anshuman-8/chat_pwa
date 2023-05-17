import React from "react";
import MainThread from "./Components/MainThread";
import Container from "./Container";

function App() {
  return (
    <div className="App h-screen">
      <header className="App-header"></header>
      <main className="max-w-md mx-auto border-x bg-[#FAF9F4] h-screen">
        <Container
          // children={
          //   <>
          //     <MainThread />
          //   </>
          // }
        />
      </main>
    </div>
  );
}

export default App;
