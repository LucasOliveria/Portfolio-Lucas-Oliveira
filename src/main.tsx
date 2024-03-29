import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import MainRoutes from './router';
import Context from './context/context';
import Portfolio from './pages/PortFolio';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Context>
      <Portfolio>
        <MainRoutes />
      </Portfolio>
    </Context>
  </BrowserRouter>
)
