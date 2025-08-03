'use client';

import { useState } from 'react';

import { Button } from '@/components/Button';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const isSubmitEnabled = email.length > 2 && message.length > 2;

  return (
    <form
      action="https://formspree.io/f/xeqdjarz"
      method="POST"
      className="mx-auto rounded-xl p-8 bg-white dark:bg-gray-800 shadow-sm animate-fade-in-down border border-gray-200 dark:border-gray-700"
    >
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 font-medium text-gray-900 dark:text-gray-100">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com"
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full py-3 px-4 text-base leading-normal text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-lg transition-all duration-200 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] dark:focus:shadow-[0_0_0_3px_rgba(96,165,250,0.1)]"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="message"
          className="block mb-2 font-medium text-gray-900 dark:text-gray-100"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="What would you like to discuss?"
          onChange={(e) => setMessage(e.target.value)}
          className="block w-full py-3 px-4 text-base leading-normal text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-lg transition-all duration-200 resize-y min-h-[120px] placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] dark:focus:shadow-[0_0_0_3px_rgba(96,165,250,0.1)]"
        />
      </div>

      <Button isDisabled={!isSubmitEnabled} type="submit">
        Send Message
      </Button>
    </form>
  );
}
