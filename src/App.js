import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Home from './page/Home/Home';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
