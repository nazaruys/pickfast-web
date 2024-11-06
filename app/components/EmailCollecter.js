import React, { useState } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const EmailCollecter = ({ placeholder = "Your email here", buttonText = "Get Early Access", onSubmit }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // New state to track submission status

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      setIsSubmitting(true); // Disable the button
      onSubmit(email);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-between items-center border-2 bg-white border-gray-300 rounded-md overflow-hidden w-full max-w-md">
      <div className="relative w-full basis-1/2 h-full">
        <EnvelopeIcon className="absolute top-1/2 left-2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className="pl-10 py-5 w-full h-full focus:outline-none bg-white"
          required
        />
      </div>
      <button
        type="submit"
        className={`mx-4 rounded-sm py-2 basis-1/2 transition-transform duration-300 transform 
                    ${isSubmitting ? 'bg-gray-400 text-gray-700' : 'bg-green-500 text-white font-semibold hover:-translate-y-[0.1rem]'} 
                    text-sm sm:text-base`} // Adjust font size for small and larger screens
        disabled={isSubmitting} // Disable button when submitting
      >
        {isSubmitting ? 'Email sent' : buttonText} {/* Change button text */}
      </button>
    </form>
  );
};

export default EmailCollecter;
