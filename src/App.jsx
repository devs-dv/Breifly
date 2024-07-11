import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import NewsFeed from "./components/NewsFeed";
import ReadySec from "./components/ReadySec";

const App = () => {
  return (
    <Router>
      <div>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<NewsFeed />} />
          <Route path="/read-more/:id" element={<ReadySec />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
