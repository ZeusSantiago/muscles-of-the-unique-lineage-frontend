import { Route, Routes, BrowserRouter } from "react-router-dom";

import Nav from "./components/menus/Nav";
import UserProtectedRoutes from "./components/utils/UserProtectedRoutes";
import AdminProtectedRoutes from "./components/utils/AdminProtectedRoutes";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import About from "./pages/About";
import CommunityPage from "./pages/CommunityPage";
import Contact from "./pages/Contact";
import CreateGroupPage from "./pages/CreateGroupPage";
import UserProfilePage from "./pages/UserProfilePage";
import RequestsPage from "./pages/RequestsPage";
import GroupPage from "./pages/GroupPage";
import JoinGroupPage from "./pages/JoinGroupPage";

import AuthContextProvider from "./contexts/AuthContextProvider";
import WorkoutContextProvider from "./contexts/WorkoutContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <WorkoutContextProvider>
        <div className="bg-lc-#F9F4F5 min-h-dvh">
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path="/login" element={<LoginPage />} />

              <Route path="/register" element={<RegistrationPage />} />
              <Route element={<UserProtectedRoutes />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/create-group" element={<CreateGroupPage />} />
                <Route path="/user" element={<UserProfilePage />} />
                <Route path="/group-page" element={<GroupPage />} />
                <Route path="/join-group-page" element={<JoinGroupPage />} />
              </Route>
              <Route element={<AdminProtectedRoutes />}>
                <Route path="/requests" element={<RequestsPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </WorkoutContextProvider>
    </AuthContextProvider>
  );
}

export default App;
