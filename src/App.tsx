/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Bikes from './components/Bikes';
import Download from './components/Download';
import Career from './components/Career';
import Leaderboard from './components/Leaderboard';
import News from './components/News';
import Guide from './components/Guide';
import { About, Contact, Policy } from './components/Support';

// Placeholder components for other pages
const Placeholder = ({ title }: { title: string }) => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-black mb-4">{title}</h1>
      <p className="text-white/50">This page is coming soon. Stay tuned!</p>
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bikes" element={<Bikes />} />
          <Route path="/career" element={<Career />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/download" element={<Download />} />
          <Route path="/news" element={<News />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Policy title="Privacy Policy" />} />
          <Route path="/terms" element={<Policy title="Terms of Service" />} />
        </Routes>
      </Layout>
    </Router>
  );
}
