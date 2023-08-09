import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoadingBar from "react-top-loading-bar";

import React, { useState } from "react";
import Navigation from "./Components/Navigation";
import News from "./Components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App =()=> {
  const pageSize = 12;
 const apiKey = process.env.REACT_APP_NEWS_API
 const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <BrowserRouter>
          <LoadingBar shadow={true} height={3}  color="#f11946" progress={progress} />
          <Navigation />
          <Routes>
            {/* <Route path="/" element={home}/> */}

            <Route
              path="/business"
              element={
                <News setProgress={setProgress} apiKey={apiKey}
                  key="business"
                  pageSize={pageSize}
                  country="us"
                  category="business"
                />
              }
            />

            <Route
              path="/entertainment"
              element={
                <News setProgress={setProgress} apiKey={apiKey}
                  key="entertainment"
                  pageSize={pageSize}
                  country="us"
                  category="entertainment"
                />
              }
            />

            <Route
              path="/general"
              element={
                <News setProgress={setProgress} apiKey={apiKey}
                  key="general"
                  pageSize={pageSize}
                  country="us"
                  category="general"
                />
              }
            />

            <Route
              path="/health"
              element={
                <News setProgress={setProgress} apiKey={apiKey}
                  key="health"
                  pageSize={pageSize}
                  country="us"
                  category="health"
                />
              }
            />

            <Route
              path="/science"
              element={
                <News setProgress={setProgress} apiKey={apiKey}
                  key="science"
                  pageSize={pageSize}
                  country="us"
                  category="science"
                />
              }
            />

            <Route
              path="/sports"
              element={
                <News setProgress={setProgress} apiKey={apiKey}
                  key="sports"
                  pageSize={pageSize}
                  country="us"
                  category="sports"
                />
              }
            />

            <Route
              path="/technology"
              element={
                <News setProgress={setProgress} apiKey={apiKey}
                  key="technology"
                  pageSize={pageSize}
                  country="us"
                  category="technology"
                />
              }
            />

            {/* <Route path="/about" element={about}/> */}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }


export default App;
