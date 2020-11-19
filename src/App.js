// import logo from './delv1.svg';
import './App.css';
import Home from './containers/Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import LogIn from './containers/LogIn';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <Header/>
      <Route path="/" exact component={Home}/>
      <Route path="/log-in" component={LogIn}/>
      <Footer/>
    </Router>
      
  
    
  );
}

export default App;
