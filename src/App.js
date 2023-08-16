import logo from "./logo.svg";
import "./App.css";
import ProductPage from "./pages/Product";
import AdminLayout from "./layouts/AdminLayout";
import Router from "./routes";
import { ToastMessage } from "./components/ToastMessage";

function App() {
  return (
    <div className="App">
      <ToastMessage />

      <Router />
    </div>
  );
}

export default App;
