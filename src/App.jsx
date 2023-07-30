// router
import { Route, Routes } from "react-router-dom";

// components
import { Footer, Navbar } from "./components";

// pages
import {
  About,
  BlogExtended,
  Blogs,
  Contact,
  Franchise,
  Home,
  IOT,
  Jobs,
  Logistics,
  NotFound,
  Rental,
} from "./pages";

function App() {
  return (
    <body className="selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-extended" element={<BlogExtended />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="/third-party-logistics" element={<Logistics />} />
        <Route path="/iot" element={<IOT />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </body>
  );
}

export default App;
