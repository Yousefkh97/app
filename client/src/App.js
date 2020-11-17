import './App.css';
import image from './images/atsApp_Image_2020-11-15_at_13.47.43.svg'

function App() {
  return (
    <div className="App">
        <img src={image} className="appImage" alt="logo" />
        <a class="button" href="https://www.trendyol.com/" target="_blank" rel="noreferrer">trendyol.com</a>
        <a class="button" href="https://www.hepsiburada.com/" target="_blank" rel="noreferrer">hepsiburada.com</a>
        <a class="button" href="https://www.n11.com/" target="_blank" rel="noreferrer">n11.com</a>

    </div>
  );
}


// https://www.trendyol.com/

// https://www.hepsiburada.com/


// https://www.n11.com/

export default App;


// import React, {useState}from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useHistory
// } from "react-router-dom";

// import './App.css';

// export default function App() {
//   const [cnt2, setCnt2] = useState(0)
//   return (
//     <Router>
//       <div className='app'>
//         {/* location of nav... it is not a must */}
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//           <button onClick={()=>{setCnt2(cnt2+1)}}>Counting {cnt2}</button>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return (
//     <div className='page'>
//       <h2>Hello</h2>
//       <a href="https://youtube.com">Your Link</a>
//     </div>
//   )
// }

// function About() {
//   let history = useHistory();
//   const [counter, setCounter] = useState(0);
 
  
//   return (
//     <div className='page'>
//       <h1>{counter}</h1>
//       <button onClick={()=>setCounter(counter+1)}>Count+</button>
//       <h2>About</h2>
//       <button onClick={()=>{
//         history.push('/')
//       }}>Go to home</button>
//     </div>
//   )
// }

// function Users() {
//   return (
//     <div className='page'>
//       <h2>Users</h2>
//       <Link to="/about"><div>Go to about</div></Link>
//     </div>
//   )
// }
