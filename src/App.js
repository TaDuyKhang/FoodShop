import "./App.css";

import Item from "./components/Item";
import {
  BrowserRouter as Router,
  Route,
  useParams,
  Switch,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Card from "./components/Card";
// import { Counter } from "./features/counter/Counter";
import Login from "./components/Login";
import FindByText from "./components/FindByText";
import FindByCategory from "./components/FindByCategory";
function App() {
  return (
    <Router className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" children={<Login />} />
        <Route path="/item/:id" children={<Item />} />
        <Route exact path="/category=:id" children={<FindByCategory />} />
        <Route path="/card" component={Card} />
        <Route path="/find=:id" children={<FindByText />} />
        {/* <Route path="*">
          <NoMatch />
        </Route> */}
      </Switch>
    </Router>
  );
}

// function NoMatch() {
//   let location = useLocation();

//   return (
//     <div>
//       <h3>
//         No match for <code>{location.pathname}</code>
//       </h3>
//     </div>
//   );
// }

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export default App;
