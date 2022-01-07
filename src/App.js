import { Link } from "react-router-dom";
import Layout from "./Components/Layout/Layout";


function App() {
  return (
    <div className="App">
      <Layout>
        {/* Router Page and */}
        <div className="bg-red-200 rounded mx-auto p-4 h-full">
          <p className="text-black">Hello</p>
          <Link to="/admin" >
            A
          </Link>
        </div>
      </Layout>
    </div>
  );
}

export default App;

