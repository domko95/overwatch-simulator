import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Rules from './components/Rules';
import Form from './components/Form';
import Role from './components/Role';
import Player from './components/Player';
import Match from './components/Match';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.ul`
  flex-shrink: 0;
  width: 100%;
  margin: 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style-type: none;
  background: black;
`;

const Main = styled.main`
  width: 80vw;
  background: lightgrey;
  height: 100%;
  overflow: auto;
`;

const BackgroundContainer = styled.main`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100vw;
  background: orange;
`;

const Footer = styled.footer`
  flex-shrink: 0;
  width: 100%;
  padding: 10px 0;
  text-align: center;
  background: black;
  color: orange;
`;

const ListItem = styled.li`
  padding: 0.5rem;
  background: orange;
  color: white;
  text-decoration: none;
`;

const CenterImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 300px;
`;

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Container>
          <Nav>
            <Link to="/">
              <ListItem>Home</ListItem>
            </Link>
            <Link to="/rules">
              <ListItem>Regeln</ListItem>
            </Link>
            <Link to="/registration">
              <ListItem>Anmeldung</ListItem>
            </Link>
            <Link to="/match">
              <ListItem>Match</ListItem>
            </Link>
          </Nav>
          <BackgroundContainer>
            <Main>
              <h1>Domko95s Overwatch Simulator</h1>
              <Switch>
                <Route path="/player/:name">
                  <Player />
                </Route>
                <Route path="/rules">
                  <Rules />
                </Route>
                <Route path="/registration">
                  <Form />
                </Route>
                <Route path="/match">
                  <Match />
                </Route>
                <Route path="/:teamId">
                  <Role />
                </Route>
                <Route path="/">
                  <CenterImage>
                    <Image
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmaxcdn.icons8.com%2FColor%2FPNG%2F512%2FLogos%2Foverwatch-512.png&f=1&nofb=1"
                      alt="Overwatch-Logo"
                    />
                  </CenterImage>
                </Route>
              </Switch>
            </Main>
          </BackgroundContainer>
          <Footer>Version Alpha 0.2.7</Footer>
        </Container>
      </Router>
    </>
  );
}

export default App;
