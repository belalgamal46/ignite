//Components and Pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
//React Router
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <header>
        <Nav />
      </header>
      <main>
        <Route path={["/games/:id", "/"]}>
          <Home />
        </Route>
      </main>
    </div>
  );
}

export default App;
