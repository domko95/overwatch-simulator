import GlobalStyle from './GlobalStyle';
import Rules from './components/Rules';
import Form from './components/Form';

function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <h1>Domko95s Overwatch Simulator</h1>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmaxcdn.icons8.com%2FColor%2FPNG%2F512%2FLogos%2Foverwatch-512.png&f=1&nofb=1"
          alt="Overwatch-Logo"
        />
        <Form />
        <Rules />
      </main>
    </>
  );
}

export default App;
