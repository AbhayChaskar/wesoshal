import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";
import {Home, Login, Profile, Register, ResetPassword} from './pages'

function App() {
  function Layout() {
    const user = null;
    const location = useLocation();

    return user?.token ? (
      <Outlet />
    ) : (
      <Navigate to="/login" state={{ from: location }} replace />
    );
  }
  return (
    <>
      <div className="w-full min-h-[100vh]">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile/:id?" element={<Profile />}></Route>
          </Route>

          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/resetpassword" element={<ResetPassword/>}></Route>
          <Route path="*" element={<Navigate to="/login"></Navigate>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
