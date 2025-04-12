// import '@fontsource/inter/variable.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import LandingPage from './pages/LandingPage.jsx';
import HowItWorks from './pages/HowItWorks.jsx';
import ChallengesPage from './pages/challenges/ChallengesPage.jsx'
import ChallengePage from './pages/challenges/ChallengePage.jsx'
import AuthPage from './pages/auth/AuthPage.jsx';
import CandidateDashboard from './pages/candidate/CandidateDashboard.jsx';
import CandidateProfile from './pages/candidate/CandidateProfile.jsx';
import ExploreJobsPage from './pages/jobs/ExploreJobsPage.jsx';
import JobDetailPage from './pages/jobs/JobDetailPage.jsx';
import JobApplicationPage from './pages/jobs/JobApplicationPage.jsx';
import EmployerDashboard from './pages/employer/EmployerDashboard.jsx'
import EmployerApplications from './pages/employer/EmployerApplications.jsx'
import PostChallenge from './pages/employer/PostChallenge.jsx';
import EmployerProfile from './pages/employer/EmployerProfile.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<LandingPage />} />
      <Route path="auth" element={<AuthPage />} />
        <Route path="auth/candidate/dashboard" element={<CandidateDashboard />} />
        <Route path="auth/candidate/profile" element={<CandidateProfile />} />
        <Route path="auth/employer/dashboard" element={<EmployerDashboard />} />
        <Route path="auth/employer/applications" element={<EmployerApplications />} />
        <Route path="auth/employer/post-challenge" element={<PostChallenge />} />
        <Route path="auth/employer/profile" element={<EmployerProfile />} />

      <Route path="jobs" element={<ExploreJobsPage />} />
        <Route path="jobs/1" element={<JobDetailPage />} />
          <Route path="jobs/1/apply" element={<JobApplicationPage />} />
        <Route path="jobs/2" element={<JobDetailPage />} />
          <Route path="jobs/2/apply" element={<JobApplicationPage />} />
        <Route path="jobs/3" element={<JobDetailPage />} />
          <Route path="jobs/3/apply" element={<JobApplicationPage />} />
        <Route path="jobs/4" element={<JobDetailPage />} />
          <Route path="jobs/4/apply" element={<JobApplicationPage />} />
  

      <Route path="how-it-works" element={<HowItWorks />} />

      <Route path="challenges" element={<ChallengesPage />} />
        <Route path="challenges/1" element={<ChallengePage />} />
        <Route path="challenges/2" element={<ChallengePage />} />
        <Route path="challenges/3" element={<ChallengePage />} />
        <Route path="challenges/4" element={<ChallengePage />} />
        <Route path="challenges/5" element={<ChallengePage />} />
        <Route path="challenges/6" element={<ChallengePage />} />

      
      {/* <Route path="*" element={<NoPage />} /> */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);