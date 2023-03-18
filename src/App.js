import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import Post from './component/Post/Post';
import PostList from './component/PostList/PostList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <div className=" mx-auto pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/post-list" element={<PostList />} />
            <Route path="/post/:name" element={<Post />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
