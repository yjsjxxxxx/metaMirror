import React from 'react';
import { Section } from './ui/Section';

const logos = [
  'Harvard University',
  'Stanford University',
  'MIT',
  'Yale',
  'Procter & Gamble',
  'Unilever',
  'GSK',
  'BMW',
];

export function LogoCloud() {
  return (
    <Section className="bg-white py-12 border-b border-slate-100">
      <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
        Trusted by leading universities and companies worldwide
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        {logos.map((logo) => (
          <div key={logo} className="text-xl font-bold text-slate-400 hover:text-slate-800 transition-colors cursor-default">
            {logo}
          </div>
        ))}
      </div>
    </Section>
  );
}
