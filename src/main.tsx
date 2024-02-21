import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import MainRoutes from './router';
import Context from './context/context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Context>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </Context>
)
