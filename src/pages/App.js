import { useSelector } from 'react-redux'

function App() {
    const state = useSelector((state) => state)
    return (
        <div className="App">
            <header className="App-header">
                <code>{JSON.stringify(state, null, 4)}</code>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
