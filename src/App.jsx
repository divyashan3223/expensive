import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Layout from "../src/components/Layout";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App w-full">
      {/* <Layout /> */}

      <Router>
        <Routes>
          <Route path="/categories" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
