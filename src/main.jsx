// import '@fontsource/inter/variable.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import LandingPage from './pages/LandingPage.jsx';
import SignUp from './pages/SignUp.jsx';
import HowItWorks from './pages/HowItWorks.jsx';
import ChallengesList from './pages/challenges/ChallengesList.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<LandingPage />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="how-it-works" element={<HowItWorks />} />
      <Route path="challenges" element={<ChallengesList />} />
      {/* <Route path="how-it-works" element={<HowItWorks />} /> */}
      {/* <Route path="*" element={<NoPage />} /> */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);