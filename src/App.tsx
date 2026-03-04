/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoCloud } from './components/LogoCloud';
import { Products } from './components/Products';
import { Solutions } from './components/Solutions';
import { News } from './components/News';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Products />
        <Solutions />
        <News />
      </main>
      <Footer />
    </div>
  );
}
