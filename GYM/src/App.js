import './App.css';
// import "../public/Logo/t4-e.ico";
import NavBar from '../src/Components/NavBar/NavBar';
import { BrowserRouter as Router, 
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <NavBar />


    </Router>

      


    </>
    
  );
}

export default App;
