import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import ComponentGenerator from './pages/ComponentGenerator';
import PricingPage from './pages/Pricingpage';
import ComponentsPage from './pages/Componentspage';
import MyComponentsPage from './pages/MyComponentsPage';

import {
  setAllComponents,
  setAllUsers,
  setUserData
} from './redux/userSlice';

export const ServerUrl = "https://ui-ai-library.onrender.com";

function App() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);

  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `${ServerUrl}/api/user/currentuser`,
          { withCredentials: true }
        );

        dispatch(setUserData(res.data));
      } catch (error) {
        dispatch(setUserData(null));
      } finally {
        setAuthChecked(true);
      }
    };

    fetchUser();
  }, [dispatch]);

  useEffect(() => {
    if (!userData) return;

    const fetchExtraData = async () => {
      try {
        const [usersRes, componentsRes] = await Promise.all([
          axios.get(`${ServerUrl}/api/user/all-users`, {
            withCredentials: true
          }),
          axios.get(`${ServerUrl}/api/component/all-components`, {
            withCredentials: true
          })
        ]);

        dispatch(setAllUsers(usersRes.data));
        dispatch(setAllComponents(componentsRes.data));

      } catch (error) {
        console.error("Extra API Error:", error);
      }
    };

    fetchExtraData();
  }, [userData, dispatch]);

  if (!authChecked) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/admin"
        element={
          userData?.role === "admin"
            ? <AdminDashboard />
            : <Navigate to="/" replace />
        }
      />

      <Route path="/generate" element={<ComponentGenerator />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/component" element={<ComponentsPage />} />
      <Route path="/my-components" element={<MyComponentsPage />} />
    </Routes>
  );
}

export default App;
