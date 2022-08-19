import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className='container'>
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className='App-footer'>
          <a href="https://github.com/TashaStinger/dictionary-project" target="_blank" rel="noreferrer">
            Open-source code</a> by Natalia Chaplia  
        </footer>
      </div>
    </div>
  );
}

export default App;
