import React from "react";
import MainThread from "./Components/MainThread";
import Container from "./Container";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main className="max-w-md border border-slate-800 mx-auto bg-[#FAF9F4] h-screen">
        <h1>React App</h1>
        <Container
          children={
            <>
              <MainThread />
            </>
          }
        />
      </main>
    </div>
  );
}

export default App;
