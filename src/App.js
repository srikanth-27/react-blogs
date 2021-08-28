import { Switch, Route } from "react-router-dom";

import Home from "./components/home";
import Blog from "./components/blog";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/blog" component={Blog} />
    </Switch>
  );
}

export default App;
