import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Reset default styles and set explicit background
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.boxSizing = 'border-box';
    document.body.style.backgroundColor = '#f9fafb';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.documentElement.style.boxSizing = 'border-box';
  }, []);

  const handleLogout = () => {
    // Placeholder for logout logic
    navigate('/doctor-login');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      style={{
        backgroundColor: '#f9fafb',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      className="min-h-screen bg-gray-50 font-sans text-gray-800 flex flex-col"
    >
      {/* Header */}
      <header
        style={{
          background: 'linear-gradient(to right, #2563eb, #1e40af)',
          color: '#ffffff',
          width: '100%',
          position: 'fixed',
          top: '0',
          zIndex: '10',
        }}
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white w-full fixed top-0 z-10"
      >
        <nav
          style={{
            maxWidth: '1280px',
            width: '100%',
            margin: '0 auto',
            padding: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          className="max-w-5xl w-full mx-auto px-4 py-4 flex justify-between items-center"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={toggleSidebar}
              style={{ display: 'none', background: 'none', border: 'none', color: '#ffffff' }}
              className="md:hidden text-white text-2xl"
            >
              ☰
            </button>
            <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold' }} className="text-3xl font-bold tracking-tight">
              DocBook
            </h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '1rem' }} className="text-base">
              Dr. John Doe
            </span>
            <button
              onClick={handleLogout}
              style={{ color: '#ffffff', textDecoration: 'none', fontSize: '1rem', background: 'none', border: 'none', cursor: 'pointer' }}
              className="text-white hover:text-gray-200 transition text-base"
            >
              Logout
            </button>
          </div>
        </nav>
      </header>

      {/* Main Layout */}
      <div style={{ display: 'flex', marginTop: '64px', flex: '1' }} className="flex mt-16">
        {/* Sidebar */}
        <aside
          style={{
            width: isSidebarOpen ? '240px' : '0',
            position: 'fixed',
            top: '64px',
            left: '0',
            height: 'calc(100vh - 64px)',
            backgroundColor: '#ffffff',
            boxShadow: '2px 0 8px rgba(0, 0, 0, 0.1)',
            transition: 'width 0.3s ease',
            overflow: 'hidden',
            zIndex: '5',
          }}
          className={`md:w-60 md:static md:block ${isSidebarOpen ? 'w-60' : 'w-0'} fixed top-16 left-0 h-[calc(100vh-64px)] bg-white shadow-lg transition-all duration-300 z-5 overflow-hidden`}
        >
          <nav style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }} className="p-6 flex flex-col gap-4">
            <Link
              to="/doctor-dashboard"
              style={{ color: '#2563eb', fontSize: '1.125rem', fontWeight: '500', textDecoration: 'none' }}
              className="text-blue-600 font-medium text-lg hover:text-blue-700"
            >
              Dashboard
            </Link>
            <Link
              to="#"
              style={{ color: '#4b5563', fontSize: '1.125rem', fontWeight: '500', textDecoration: 'none' }}
              className="text-gray-600 font-medium text-lg hover:text-blue-600"
            >
              Schedule
            </Link>
            <Link
              to="#"
              style={{ color: '#4b5563', fontSize: '1.125rem', fontWeight: '500', textDecoration: 'none' }}
              className="text-gray-600 font-medium text-lg hover:text-blue-600"
            >
              Patients
            </Link>
            <Link
              to="#"
              style={{ color: '#4b5563', fontSize: '1.125rem', fontWeight: '500', textDecoration: 'none' }}
              className="text-gray-600 font-medium text-lg hover:text-blue-600"
            >
              Profile
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main
          style={{
            flex: '1',
            marginLeft: '0',
            padding: '32px 16px',
            transition: 'margin-left 0.3s ease',
          }}
          className="flex-1 md:ml-60 p-4 transition-all duration-300"
        >
          <div
            style={{
              maxWidth: '1024px',
              width: '100%',
              margin: '0 auto',
            }}
            className="max-w-4xl w-full mx-auto"
          >
            {/* Welcome Section */}
            <section
              style={{
                marginBottom: '32px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              className="mb-8 flex justify-between items-center"
            >
              <div>
                <h2 style={{ fontSize: '2rem', fontWeight: '700' }} className="text-3xl font-bold">
                  Welcome, Dr. John Doe
                </h2>
                <p style={{ fontSize: '1rem', color: '#4b5563' }} className="text-base text-gray-600">
                  Monday, May 05, 2025
                </p>
              </div>
            </section>

            {/* Stats Cards */}
            <section
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
                marginBottom: '32px',
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
            >
              <div
                style={{
                  backgroundColor: '#ffffff',
                  padding: '24px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#4b5563' }} className="text-xl font-semibold text-gray-600">
                  Total Patients
                </h3>
                <p style={{ fontSize: '2rem', fontWeight: '700', color: '#2563eb' }} className="text-3xl font-bold text-blue-600">
                  120
                </p>
              </div>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  padding: '24px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#4b5563' }} className="text-xl font-semibold text-gray-600">
                  Upcoming Appointments
                </h3>
                <p style={{ fontSize: '2rem', fontWeight: '700', color: '#2563eb' }} className="text-3xl font-bold text-blue-600">
                  5
                </p>
              </div>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  padding: '24px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#4b5563' }} className="text-xl font-semibold text-gray-600">
                  Completed Today
                </h3>
                <p style={{ fontSize: '2rem', fontWeight: '700', color: '#2563eb' }} className="text-3xl font-bold text-blue-600">
                  3
                </p>
              </div>
            </section>

            {/* Appointments Section */}
            <section
              style={{
                backgroundColor: '#ffffff',
                padding: '24px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                marginBottom: '32px',
              }}
              className="bg-white p-6 rounded-xl shadow-lg mb-8"
            >
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '16px' }} className="text-2xl font-semibold mb-4">
                Today’s Schedule
              </h3>
              <div style={{ overflowX: 'auto' }}>
                <table
                  style={{ width: '100%', borderCollapse: 'collapse' }}
                  className="w-full table-auto"
                >
                  <thead>
                    <tr style={{ backgroundColor: '#f3f4f6', textAlign: 'left' }}>
                      <th style={{ padding: '12px', fontSize: '0.875rem', fontWeight: '500' }} className="px-3 py-3 text-sm font-medium text-gray-700">
                        Patient Name
                      </th>
                      <th style={{ padding: '12px', fontSize: '0.875rem', fontWeight: '500' }} className="px-3 py-3 text-sm font-medium text-gray-700">
                        Date
                      </th>
                      <th style={{ padding: '12px', fontSize: '0.875rem', fontWeight: '500' }} className="px-3 py-3 text-sm font-medium text-gray-700">
                        Time
                      </th>
                      <th style={{ padding: '12px', fontSize: '0.875rem', fontWeight: '500' }} className="px-3 py-3 text-sm font-medium text-gray-700">
                        Status
                      </th>
                      <th style={{ padding: '12px', fontSize: '0.875rem', fontWeight: '500' }} className="px-3 py-3 text-sm font-medium text-gray-700">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                      <td style={{ padding: '12px', fontSize: '0.875rem' }} className="px-3 py-3 text-sm text-gray-800">
                        Jane Smith
                      </td>
                      <td style={{ padding: '12px', fontSize: '0.875rem' }} className="px-3 py-3 text-sm text-gray-800">
                        2025-05-05
                      </td>
                      <td style={{ padding: '12px', fontSize: '0.875rem' }} className="px-3 py-3 text-sm text-gray-800">
                        10:00 AM
                      </td>
                      <td style={{ padding: '12px', fontSize: '0.875rem' }} className="px-3 py-3 text-sm text-gray-800">
                        Pending
                      </td>
                      <td style={{ padding: '12px', fontSize: '0.875rem' }} className="px-3 py-3 text-sm">
                        <button
                          onClick={() => alert('Appointment confirmed!')}
                          style={{
                            backgroundColor: '#2563eb',
                            color: '#ffffff',
                            padding: '6px 12px',
                            borderRadius: '6px',
                            border: 'none',
                            cursor: 'pointer',
                            marginRight: '8px',
                          }}
                          className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => alert('Appointment cancelled!')}
                          style={{
                            backgroundColor: '#ef4444',
                            color: '#ffffff',
                            padding: '6px 12px',
                            borderRadius: '6px',
                            border: 'none',
                            cursor: 'pointer',
                          }}
                          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                      <td style={{ padding: '12px', fontSize: '0.875rem' }} className="px-3 py-3 text-sm text-gray-800">
                        Michael Brown
                      </td>
                      <td style={{ padding: '12px', fontSize: '0.875rem' }} className="px-3 py-3 text-sm text-gray-800">
                        2025-05-05
                      </td>
                      <td style={{ padding: '12px', fontSize: '0.875rem' }} className="px-3 py-3 text-sm text-gray-800">
                        2:00 PM
                      </td>
                      <td style={{ padding: '12px', fontSize: '0.875rem' }} className="px-3 py-3 text-sm text-gray-800">
                        Confirmed
                      </td>
                      <td style={{ padding: '12px', fontSize: '0.875rem' }} className="px-3 py-3 text-sm">
                        <button
                          onClick={() => alert('Appointment confirmed!')}
                          style={{
                            backgroundColor: '#2563eb',
                            color: '#ffffff',
                            padding: '6px 12px',
                            borderRadius: '6px',
                            border: 'none',
                            cursor: 'pointer',
                            marginRight: '8px',
                          }}
                          className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => alert('Appointment cancelled!')}
                          style={{
                            backgroundColor: '#ef4444',
                            color: '#ffffff',
                            padding: '6px 12px',
                            borderRadius: '6px',
                            border: 'none',
                            cursor: 'pointer',
                          }}
                          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#1f2937',
          color: '#ffffff',
          padding: '48px 16px',
          width: '100%',
        }}
        className="bg-gray-800 text-white py-12 w-full"
      >
        <div
          style={{ maxWidth: '1024px', width: '100%', textAlign: 'center', margin: '0 auto' }}
          className="w-full max-w-4xl px-4 text-center mx-auto"
        >
          <p style={{ marginBottom: '24px', fontSize: '1.125rem' }} className="mb-6 text-lg">
            © 2025 DocBook. All rights reserved.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }} className="flex justify-center gap-6">
            <a href="#" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '1rem' }} className="hover:underline text-base">
              Privacy Policy
            </a>
            <a href="#" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '1rem' }} className="hover:underline text-base">
              Terms of Service
            </a>
            <a href="#" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '1rem' }} className="hover:underline text-base">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DoctorDashboard;