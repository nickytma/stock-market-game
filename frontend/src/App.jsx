import Search from "./components/Search.jsx";
import LoginPage from "./components/LoginPage.jsx";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Search />} path="*" />
        </Route>
        <Route element={<LoginPage />} path="/login" />
      </Routes>
    </Router>
  );
}

export default App;
