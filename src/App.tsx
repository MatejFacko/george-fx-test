import React from "react";
import {HashRouter, Route} from "react-router-dom";
import {HomePage} from "./pages";
import {ReactQueryClientProvider} from "./ReactQueryClientProvider";

export const App = () => (
  <ReactQueryClientProvider>
    <HashRouter>
      <Route path="/" component={HomePage} />
    </HashRouter>
  </ReactQueryClientProvider>
);
