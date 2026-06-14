// // function Home() {
// //   return (
// //     <div className="hero">
// //       <h1>LIVE LOUD. FEEL THE ROCK.</h1>
// //     </div>
// //   );
// // }

// // export default Home;
// // import { Link } from "react-router-dom";
// // import "../App.css";

// // function Home() {
// //   return (
// //     <div className="hero">

// //       <nav className="navbar">
// //         <div className="logo">
// //           ⚡ ALEX <span>STORM</span>
// //         </div>

// //         <ul className="nav-links">
// //           <li><Link to="/">HOME</Link></li>
// //           <li><Link to="/about">ABOUT</Link></li>
// //         </ul>

// //         <button className="book-btn">
// //           BOOK NOW
// //         </button>
// //       </nav>

// //       <div className="content">
// //         <h1 className="title">
// //           LIVE LOUD.
// //           <span>FEEL THE ROCK.</span>
// //         </h1>
// //       </div>

// //     </div>
// //   );
// // }

// // export default Home;
// import { Link } from "react-router-dom";
// import "../App.css";
// import bgImage from "../assets/rock.png";

// function App() {
//   return (
//     <div
//       className="hero"
//       style={{
//         backgroundImage: `
//         linear-gradient(
//           to right,
//           rgba(0,0,0,0.95) 30%,
//           rgba(0,0,0,0.2)
//         ),
//         url(${bgImage})
//         `,
//       }}
//     >
//       {/* NAVBAR */}
//       <nav className="navbar">

//         <div className="logo">
//           ⚡ ALEX <span>STORM</span>
//         </div>

//         {/* <ul className="nav-links">
//           <li><a href="#">HOME</a></li>
//           <li><a href="#">ABOUT</a></li>
//           <li><a href="#">SERVICES</a></li>
//           <li><a href="#">GALLERY</a></li>
//           <li><a href="#">VIDEOS</a></li>
//           <li><a href="#">REVIEWS</a></li>
//           <li><a href="#">CONTACT</a></li>
//         </ul> */}
//         <li><a href="#">HOME</a></li>
//         <li><a href="#">ABOUT</a></li>
//         <li><a href="#">GALLERY</a></li>

//         <button className="book-btn">
//           BOOK NOW
//         </button>

//       </nav>

//       {/* CONTENT */}
//       <div className="content">

//         <div className="text-box">

//           <h1 className="title">
//             LIVE LOUD.
//             <span>FEEL THE ROCK.</span>
//           </h1>

//           <p className="subtitle">
//             Rock Concerts That Ignite The Stage.
//             <br />
//             Unforgettable Moments That Stay Forever.
//           </p>

//           <div className="divider"></div>

//           <h2 className="event-text">
//             ALSO AVAILABLE FOR
//             <br />
//             <span>HOME PARTIES & PRIVATE EVENTS</span>
//           </h2>

//           <div className="buttons">

//             <button className="btn-red">
//               BOOK FOR CONCERT
//             </button>

//             <button className="btn-outline">
//               BOOK FOR HOME PARTY
//             </button>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default App;

// import Hero from "./Co

import Content from "./Content";
import Video from "./Video";
import Artist from "./Artist";
import ABOUT from "./About";
import About from "./About";
import VideoHalf from "./VideoHalf";
import GallaryHalf from "./GallaryHalf";

function Home() {
  return (
    <>
      <Content />
      <Artist />
      <VideoHalf />
      <GallaryHalf />
      
      {/* <About /> */}
    </>
  );
}

export default Home;