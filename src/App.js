import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { lazy, useState, Suspense } from 'react'
const HomePage = lazy(()=> import('./pages/HomePage'));
const LoginPage = lazy(()=> import('./pages/LoginPage'));

// import './App.css';
// import {BrowserRouter as Router,
// Route,
// Switch} from 'react-router-dom';
// import {lazy,useState,Suspence} from 'react';
// const HomePage=lazy(()=> import ('./pages/HomePage'));
// const LoginPage =lazy(()=>import('./pages/LoginPage'));


function App() {
  const [ isLogin, setIsLogin ] = useState(window.localStorage.getItem('name'));
// function App(){
//   const [isLogin,setIsLogin]=useState(window.localStorage.getItem('name'));
//   return (
//   <>
//   <Suspense fallback={<><h1>404 page not found</h1> </>}>
//     <Router>
//       <Switch>
//         {

// isLogin ?
// <Route path='/' exact  component={HomePage}/>:
// <Route path='/' exact render={()=><LoginPage setIsLogin={setIsLogin}/>}/>


//         }
//       </Switch>
//     </Router>
//   </Suspense>
//   </>);
// }

  return (
    <div>
      <Suspense fallback={<><h1 className='text-center mt-5'>404 Not Found</h1></>}>
        <Router>
          <Switch>
            {
              isLogin ?
              <Route path='/' exact component={HomePage} /> :
              <Route path='/' exact render={()=> <LoginPage setIsLogin={setIsLogin} />} />
            }
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
