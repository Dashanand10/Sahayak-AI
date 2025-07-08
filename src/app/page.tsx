'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import { useAuth } from '../hooks/useAuth';

export default function Home() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800">
      <Navbar />
      <HeroSection />

      {/* Show login prompt for unauthenticated users */}
      {!isAuthenticated && (
        <section className="max-w-4xl mx-auto py-12 px-6 bg-white rounded-xl shadow-lg my-10 text-center">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">Sign up or log in to access the AI Teaching Assistant</p>
          <div className="space-x-4">
            <a href="/signup" className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition">
              Sign Up Free
            </a>
            <a href="/login" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-xl hover:bg-indigo-50 transition">
              Login
            </a>
          </div>
        </section>
      )}

      {/* 🔥 AI Teaching Assistant Chatbot - Only show if authenticated */}
      {isAuthenticated && (
        <section id="dashboard" className="max-w-4xl mx-auto py-12 px-6 my-10">
          <ChatBot />
        </section>
      )}

      <Features />
      <Footer />
    </main>
  );
}