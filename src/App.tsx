import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "./components/ui/toaster";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import LandingPage from "./pages/landingpage/page";
import Admin from "./admin/admin";
import { User } from "lucide-react";
import Employer from "./employer/employer";
import Userform from "./pages/register/Userform";
import Employerform from "./pages/register/Employerform";
import Adminform from "./pages/register/Adminform";
import Registerpage from "./pages/register/registerpage";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/register">
            <Route path="user" element={<Userform />} />

            <Route path="employer" element={<Employerform />} />

            <Route path="admin" element={<Adminform />} />
          </Route>
          <Route path="/admin" element={<Admin />}>
            {/* <Route path="user-management" element={<UserManagement />} /> */}
            {/* <Route
            path="facility-approval"
            element={<FacilityApproval />}
          />
          <Route
            path="ambulance-approval"
            element={<AmbulanceApproval />}
          />
          <Route
            path="incharge-approval"
            element={<InchargeApproval />}
          />
          <Route path="*" element={<Navigate to="facility-approval" />} /> */}
          </Route>
          <Route path="/user" element={<User />} />
          <Route path="/employer" element={<Employer />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
