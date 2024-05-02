import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Product from "./Pages/Product";
import Header from "./Components/Header";
import Test from "./Pages/Test";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route index path="/" element={<Product/>}/>
        <Route index path="/test" element={<Test/>}/>
      </Routes>
    </Router>
  );
}

export default App;
