import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "./components/ui/toaster";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import LandingPage from "./pages/landingpage/page";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/register" element={<FirstPageContent />} /> */}
          <Route path="/register">
            {/* <Route path="ambulance" element={<RegisterAmbulance />} />

          <Route path="incharge" element={<Inchargeform />} />

          <Route path="facility" element={<RegisterFacility />} /> */}
          </Route>
          {/* <Route
          path="/admin/*"
          element={
            <SharedLayout>
              <AppRoute />
            </SharedLayout>
          }
        >
          <Route path="user-management" element={<UserManagement />} />
          <Route
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
          <Route path="*" element={<Navigate to="facility-approval" />} />
        </Route> */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
