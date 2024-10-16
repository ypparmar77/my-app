import './App.css';
import RouterComponent from "./router/RouterComponent";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Page1Component from "./router/Page1Component";
import Page2Component from "./router/Page2Component";
import DashboardComponent from "./router/DashboardComponent";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RouterComponent />}>
            <Route index element={<DashboardComponent />} />
            <Route path="/page-1" element={<Page1Component />} />
            <Route path="/page-2" element={<Page2Component />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
