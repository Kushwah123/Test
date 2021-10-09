
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Router, Route,Switch} 
from 'react-router-dom';
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import AddUser from "./Components/Users/AddUser";
import EditUser from "./Components/Users/EditUser";
import User from "./Components/Users/User";
import Navbar from "./Components/Layout/Navbar";
import Login from "./Components/Pages/Login";



function App() {
  return (
    
    <div className='App'>
        
          <Navbar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/About' component={About}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/Users/AddUser' component={AddUser}/>
      <Route exact path='/users/edit/:id' component={EditUser}/>
      <Route exact path='/users/user/:id' component={User}/>
      <Route exact path='/Login' component={Login}/>

      
      
    
    
      
   
    </Switch>
    </div>
    
  )
};

export default App;

