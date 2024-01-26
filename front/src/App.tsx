import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./routes/HomePage";
import { BaseRoute } from "./routes/BaseRoute";
import { RouteHome } from "./routes/RouteHome";

function App() {
  return (
    <BrowserRouter>
      <BaseRoute>
        <Routes>
          <Route path="/" element={<RouteHome />} />
          <Route path="/user/:id" element={<HomePage />} />
        </Routes>
      </BaseRoute>
    </BrowserRouter>
  );
}

export default App;
