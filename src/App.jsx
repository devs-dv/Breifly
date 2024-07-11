import React from "react";
import NavBar from "./components/NavBar";
import NewsFeed from "./components/NewsFeed";
import ReadySec from "./components/ReadySec";

const App = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <NewsFeed />
      <ReadySec />
    </div>
  );
};

export default App;
