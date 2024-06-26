import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navigator from './components/navigator.tsx';
import FileUpload from './components/FileUpload.tsx';
import MediaStream from './components/MediaStream.tsx';
import Messaging from './components/Messaging.tsx';
import "./globals.css"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigator />,
    children: [
      {
        path: "/file-upload",
        element: <FileUpload />,
      },
      {
        path: "/media-stream",
        element: <MediaStream />,
      },
      {
        path: "/messaging",
        element: <Messaging />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
