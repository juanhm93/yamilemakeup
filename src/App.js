import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
// import Layout from './components/Layout';
import Home from './pages/Home';
// import Header from './components/Header'; 
// import Frontcover from './components/Frontcover';
import './App.css';
import Portfolio from './pages/Portfolio';
// import Biography from './components/Biography';
// import Course from './components/Course';
// import CourseItem from './components/CourseItem';
// import imagen from './assets/static/automaquillaje-texas.jpg';

function App() {

   
  return (
    <div className="App">
      <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/portafolio" component={Portfolio} />
                    </Switch>
      </BrowserRouter> 
    </div>  
  );
}

export default App;
