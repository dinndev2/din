import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  Loading  from './components/common/Loading.jsx'
import ErrorPage from './components/common/ErrorPage.jsx';
import { noteRoutes } from './components/Notes/Notes.jsx';
import { jobRoutes } from './components/Jobs/Jobs.jsx';

import SideBar from './components/SideBar.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import * as ReactDOM from "react-dom/client";
import App from './App.jsx'
import './index.css'
import { settingsRoutes } from './components/Settings/Settings.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      noteRoutes,
      jobRoutes,
      settingsRoutes,
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

