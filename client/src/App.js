import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          {/* <button onClick={callApi}>Call API</button> */}
          <button>Call API</button>
        </header>
      </div>
  );
}

// function callApi() {
//     fetch('https://mernshop2.herokuapp.com/', { method: 'GET' })
//         .then(data => data.json())
//         .then(json => alert(JSON.stringify(json)))
// }

export default App;