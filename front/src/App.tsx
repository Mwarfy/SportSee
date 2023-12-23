import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./routes/HomePage";
import { BaseRoute } from "./routes/BaseRoute";

function App() {
  return (
    <BrowserRouter>
      <BaseRoute>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BaseRoute>
    </BrowserRouter>
  );
}

export default App;
