'use client';

import { Button, Input } from '@react-superform/ui';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email');
    } else {
      setError('');
      alert(`Form submitted with email: ${email}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <main className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            React Superform
          </h1>
          <p className="text-xl text-gray-600">
            A reusable React component library for building beautiful forms
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Component Showcase
          </h2>

          <div className="space-y-8">
            {/* Button Examples */}
            <div>
              <h3 className="text-lg font-medium mb-4 text-gray-700">Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="sm">Primary Small</Button>
                <Button variant="primary" size="md">Primary Medium</Button>
                <Button variant="primary" size="lg">Primary Large</Button>
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                <Button variant="secondary" size="md">Secondary</Button>
                <Button variant="outline" size="md">Outline</Button>
              </div>
            </div>

            {/* Input Examples */}
            <div>
              <h3 className="text-lg font-medium mb-4 text-gray-700">Inputs</h3>
              <div className="space-y-4 max-w-md">
                <Input 
                  label="Username" 
                  placeholder="Enter your username"
                  helperText="Choose a unique username"
                />
                <Input 
                  label="Email" 
                  type="email"
                  placeholder="you@example.com"
                />
                <Input 
                  label="Password" 
                  type="password"
                  error="Password must be at least 8 characters"
                />
              </div>
            </div>

            {/* Interactive Form Example */}
            <div>
              <h3 className="text-lg font-medium mb-4 text-gray-700">Interactive Form</h3>
              <form onSubmit={handleSubmit} className="max-w-md space-y-4">
                <Input 
                  label="Email Address" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  error={error}
                />
                <Button type="submit" variant="primary" size="md">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Getting Started
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-gray-600 mb-4">
              This is a monorepo built with pnpm workspace. It contains:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>@react-superform/ui</strong> - A React component library ready to be published to npm</li>
              <li><strong>marketing</strong> - A Next.js app showcasing the components</li>
            </ul>
            <div className="mt-6 bg-gray-50 p-4 rounded">
              <code className="text-sm text-gray-800">
                pnpm install<br/>
                pnpm build<br/>
                pnpm dev
              </code>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
