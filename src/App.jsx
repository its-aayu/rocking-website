// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Video from "./pages/Video";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Review from "./pages/Review";
import Service from "./pages/Service";
import VideoHalf from "./pages/VideoHalf";
import GallaryHalf from "./pages/GallaryHalf";
import Footer from "./pages/Footer";
import BookNow from "./pages/BookNow";
import BookConcert from "./pages/BookConcert";
import BookHomeParty from "./pages/BookHomeParty";

function App() {
  return (
    // <BrowserRouter>
     <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/videos" element={<Video />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Reviews" element={<Review />} />
        <Route path="/services" element={<Service />} />
        <Route path="/videohalf" element={<VideoHalf />} />
        <Route path="/galleryhalf" element={<GallaryHalf />} />
        <Route path="/book-now" element={<BookNow />} />
        <Route path="/book-concert" element={<BookConcert />} />
        <Route path="/book-home-party" element={<BookHomeParty />} />
      </Routes>
      <Footer />
     </>
   
  );
}

export default App;
