import Reviews from './sections/Reviews';
import Parallax from './components/Parallax';
import './App.css';

function App() {
    return (
        <div className="App">
            <Parallax>
                <Reviews />
            </Parallax>
        </div>
    );
}

export default App;
