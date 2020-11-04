import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Rules from './components/Rules';
import Form from './components/Form';

const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style-type: none;
`;

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />

        <Nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rules">Regeln</Link>
          </li>
          <li>
            <Link to="/registration">Anmeldung</Link>
          </li>
        </Nav>

        <main>
          <h1>Domko95s Overwatch Simulator</h1>
          <Switch>
            <Route path="/rules">
              <Rules />
            </Route>
            <Route path="/registration">
              <Form />
            </Route>
            <Route path="/">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmaxcdn.icons8.com%2FColor%2FPNG%2F512%2FLogos%2Foverwatch-512.png&f=1&nofb=1"
                alt="Overwatch-Logo"
              />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
