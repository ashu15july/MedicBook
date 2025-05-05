import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ClinicLogin = () => {
  useEffect(() => {
    // Reset default styles and set explicit background
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.boxSizing = 'border-box';
    document.body.style.backgroundColor = '#f9fafb';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.documentElement.style.boxSizing = 'border-box';
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#f9fafb',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className="min-h-screen bg-gray-50 font-sans text-gray-800 flex flex-col justify-center items-center"
    >
      {/* Header */}
      <header
        style={{
          background: 'linear-gradient(to right, #2563eb, #1e40af)',
          color: '#ffffff',
          width: '100%',
        }}
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white w-full"
      >
        <nav
          style={{
            maxWidth: '1024px',
            width: '100%',
            margin: '0 auto',
            padding: '24px 16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          className="max-w-4xl w-full mx-auto px-4 py-6 flex justify-between items-center"
        >
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }} className="text-3xl font-bold tracking-tight">
            DocBook
          </h1>
          <Link
            to="/"
            style={{ color: '#ffffff', textDecoration: 'none', fontSize: '1.125rem' }}
            className="text-white hover:text-gray-200 transition text-lg"
          >
            Back to Home
          </Link>
        </nav>
      </header>

      {/* Login Form */}
      <section
        style={{
          width: '100%',
          flex: '1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '80px 16px',
        }}
        className="w-full flex-1 flex justify-center items-center px-4 py-20"
      >
        <div
          style={{
            maxWidth: '512px',
            width: '100%',
            padding: '48px',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            margin: '0 auto',
          }}
          className="max-w-lg w-full p-12 bg-white rounded-xl shadow-lg"
        >
          <h2 style={{ fontSize: '2.25rem', fontWeight: '700', marginBottom: '16px' }} className="text-4xl font-bold mb-4">
            Clinic Login
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#4b5563', marginBottom: '32px' }} className="text-lg text-gray-600 mb-8">
            Access your clinic dashboard to manage appointments.
          </p>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }} className="flex flex-col gap-6">
            <div>
              <label
                htmlFor="email"
                style={{ display: 'block', fontSize: '1rem', fontWeight: '500', marginBottom: '8px', textAlign: 'left' }}
                className="block text-base font-medium text-gray-700"
              >
                Email or Username
              </label>
              <input
                type="text"
                id="email"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  backgroundColor: '#ffffff',
                  color: '#000000',
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                placeholder="Enter your email or username"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                style={{ display: 'block', fontSize: '1rem', fontWeight: '500', marginBottom: '8px', textAlign: 'left' }}
                className="block text-base font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  backgroundColor: '#ffffff',
                  color: '#000000',
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: '#2563eb',
                color: '#ffffff',
                padding: '16px',
                borderRadius: '9999px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                width: '100%',
                fontSize: '1.125rem',
              }}
              className="w-full bg-blue-600 text-white px-6 py-4 rounded-full font-semibold hover:bg-blue-700 transition shadow-md text-lg"
            >
              Log In
            </button>
          </form>
        </div>
      </section>

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

export default ClinicLogin;