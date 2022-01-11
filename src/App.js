import Login from "./Components/Auth/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Mainpost from "./Components/Post/Mainpost";
import Layout from "./Components/Layout/Layout";
import NotFound from "./Components/Layout/NotFound";
import Review from "./Components/Review/Review";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Initial Page*/}
        <Route index path="/" element={<Login />} />
        {/* Sub Menu After Login*/}
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="reviews" element={<Review />} />
          <Route path="problem" element={<Mainpost />} />
          {/* ยังไม่ต้องแอด Chat Page */}
        </Route>
        {/* Not Found Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

