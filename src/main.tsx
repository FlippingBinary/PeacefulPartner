import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx';
import HomePage from './routes/Home.tsx';
import GrowPage from './routes/Grow.tsx';
import ChatPage from './routes/Chat.tsx';
import HelpPage from './routes/Help.tsx';
import ProfilePage from './routes/Profile.tsx';
import SettingsPage from './routes/Settings.tsx';
import CreditsPage from './routes/Credits.tsx';
import PolicyPage from './routes/Policy.tsx';
import ErrorPage from './Error.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <App outlet={<ErrorPage />} />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        path: "grow",
        element: <GrowPage />,
      },
      {
        path: "chat",
        element: <ChatPage />,
      },
      {
        path: "help",
        element: <HelpPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "credits",
        element: <CreditsPage />,
      },
      {
        path: "policy",
        element: <PolicyPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
