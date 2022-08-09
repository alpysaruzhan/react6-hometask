import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Shop from "./routes/shop";

function App() {
  return (
    <div className="App">
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
      <img  className="f" src="https://forcecom.kz/upload/aspro.optimus/f0c/f0cc1b0053277622603059c5282b861d.png" alt="" />
        <Link to="/shop">Каталог</Link> - <Link to="/service">Сервис-центр</Link> - <Link to="/about">О компании</Link>- <Link to="/partner">Стать партнером</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;
