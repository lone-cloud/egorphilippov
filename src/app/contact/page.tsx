'use client';

import { useState } from 'react';

import PageTitle from '@/components/PageTitle';
import Button from '@/components/Button';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const isSubmitEnabled = email.length > 2 && message.length > 2;

  return (
    <div className="max-w-4xl mx-auto p-8 relative sm:p-4 animate-fade-in-down">
      <PageTitle title="Get in touch" />

      <form
        action="https://formspree.io/f/xeqdjarz"
        method="POST"
        className="mx-auto rounded-xl p-8 bg-white shadow-sm"
      >
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 font-medium text-gray-900">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full py-3 px-4 text-base leading-normal text-gray-900 bg-white border-2 border-gray-200 rounded-lg transition-all duration-200 placeholder:text-gray-500 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 font-medium text-gray-900">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="What would you like to discuss?"
            onChange={(e) => setMessage(e.target.value)}
            className="block w-full py-3 px-4 text-base leading-normal text-gray-900 bg-white border-2 border-gray-200 rounded-lg transition-all duration-200 resize-y min-h-[120px] placeholder:text-gray-500 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
          />
        </div>

        <Button isDisabled={!isSubmitEnabled} type="submit">
          Send Message
        </Button>
      </form>
    </div>
  );
}
