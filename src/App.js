import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './component/About/About';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import Post from './component/Post/Post';
import PostList from './component/PostList/PostList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <div className="max-w-screen-md mx-auto pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/post-list" element={<PostList />} />
            <Route path="/post/:name" element={<Post />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
