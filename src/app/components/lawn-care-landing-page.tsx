import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the LawnCareLandingPageContent with server-side rendering disabled
const LawnCareLandingPageContent = dynamic(() => import('../components/LawnCareLandingPage'), { ssr: false });

export default function LawnCareLandingPage() {
  return <LawnCareLandingPageContent />;
}
