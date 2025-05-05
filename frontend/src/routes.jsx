import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DoctorLogin from './pages/DoctorLogin';
import ClinicLogin from './pages/ClinicLogin';
import DoctorDashboard from './pages/DoctorDashboard';
import ClinicDashboard from './pages/ClinicDashboard';
import ViewDoctor from './pages/ViewDoctor';
import AppointmentBooking from './pages/AppointmentBooking';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/doctor-login" element={<DoctorLogin />} />
      <Route path="/clinic-login" element={<ClinicLogin />} />
      <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
      <Route path="/clinic-dashboard" element={<ClinicDashboard />} />
      <Route path="/view-doctor/:id" element={<ViewDoctor />} />
      <Route path="/book-appointment" element={<AppointmentBooking />} />
    </Routes>
  );
};

export default AppRoutes;
