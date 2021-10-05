import React from "react";
import "./App.less";
import PokeListPage from "./pages/list";
import Header from "./components/header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div style={{ marginRight: 250, marginLeft: 250 }}>
        <PokeListPage></PokeListPage>
      </div>
    </>
  );
};

export default App;
