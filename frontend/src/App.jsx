import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import UserProfile from './pages/JobSeaker/UserProfile';
import ApplicationViewer from './pages/Employer/ApplicationViewer';
import EmployerDashboard from './pages/Employer/EmployerDashboard';
import JobPostingForm from './pages/Employer/JobPostingForm';
import EmployerProfilePage from './pages/Employer/EmployerProfilePage';
import LandingPage from './pages/LandingPage/LandingPage';
import SignUp from './pages/Auth/signUp';
import Login from './pages/Auth/login';
import JobSeakerDashboard from './pages/JobSeaker/JobSeakerDashboard';
import JobDetails from './pages/JobSeaker/JobDetails';
import SavedJobs from './pages/JobSeaker/SavedJobs';
import ManageJobs from './pages/Employer/ManageJobs';
import ProtectedRoutes from './routes/ProtectedRoutes';


const App = () => {
  return (
    <div >
      <Router>
        <Routes>
          {/**Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route path="/find-jobs" element={<JobSeakerDashboard />} />
          <Route path="/jobs/:jobId" element={<JobDetails />} />
          <Route path="saved-jobs" element={<SavedJobs />} />
          <Route path="profile" element={<UserProfile />} />

          {/** Protected Routes */}
          <Route element={<ProtectedRoutes requiredRole="employer" />} >
            <Route path="/applicants" element={<ApplicationViewer />} />
            <Route path="/employer-dashboard" element={<EmployerDashboard />} />
            <Route path="post-jobs" element={<JobPostingForm />} />
            <Route path="/manage-jobs" element={<ManageJobs />} />
            <Route path="/company-profile" element={<EmployerProfilePage />} />
          </Route>

          {/** Catch all Routes */}
          <Route path="*" element={<Navigate to='/' replace />} />
        </Routes>
      </Router>

      <Toaster
        position="top-center"
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px",
          },
        }}
      />
    </div>
  )
}
export default App;