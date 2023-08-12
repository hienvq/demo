import logo from "./logo.svg";
import "./App.css";
import ProductPage from "./pages/Product";
import AdminLayout from "./layouts/AdminLayout";
import Router from "./routes";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
