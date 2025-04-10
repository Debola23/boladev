import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { About } from './pages/About/About.jsx';
import { Skills } from './pages/Skills/Skills.jsx';
import { Project } from './pages/project/Project.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element:  <App/>,
  },
  {
    path: "/about",
    element:  <About/>,
  },
  {
    path: "/skills",
    element:  <Skills/>,
  },
  {
    path: "/projects",
    element:  <Project/>,
  },
]);

createRoot(document.getElementById('root')).render(
 <StrictMode> 
    <RouterProvider router={router} />
 </StrictMode>,
)
