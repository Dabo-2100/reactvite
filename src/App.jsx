import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
export default function App() {
  return (
    <div className="App col-12">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="*" element={"Page 404"} />
          </Route>
        </Routes>
        <Outlet />
      </BrowserRouter>
    </div>
  );
}
