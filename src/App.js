import React  from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
//  import Modals from './components/Modals/Modals';
// import Profile from './components/Pages/Profile';
import SignUp from './components/Pages/SignUp';
import UserLogin from './components/Pages/UserLogin';


function App(){
  return (
    <>
    
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/log-in' exact element={<UserLogin/>}/>
          <Route path='/sign-Up' exact element={<SignUp/>}/>
        </Routes>
      </Router>

    </>
  );
}



export default App;
