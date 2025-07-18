'use client';

import Link from 'next/link';
import { useAuth } from '../hooks/useAuth';

export default function HeroSection() {
  const { isAuthenticated } = useAuth();

  return (
    <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-100 to-indigo-100">
      <h1 className="text-5xl font-bold text-indigo-700 mb-4">Empower Every Teacher</h1>
      <p className="text-gray-600 text-lg max-w-xl mx-auto">
        Sahayak AI helps teachers manage multi-grade classrooms by generating personalized content using AI.
      </p>
      
      {isAuthenticated ? (
        <a
          href="#dashboard"
          className="mt-8 inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
        >
          Start Creating Content
        </a>
      ) : (
        <Link
          href="/signup"
          className="mt-8 inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
        >
          Get Started
        </Link>
      )}
    </section>
  );
}