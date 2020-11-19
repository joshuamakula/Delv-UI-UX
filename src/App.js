// import logo from './delv1.svg';
import './App.css';
import Home from './containers/home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import LogIn from './containers/login';
import Footer from './components/footer';
import Header from './components/header';


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
