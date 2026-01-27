// src/pages/NotFound.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center pt-8 sm:justify-start sm:pt-0">
          <div className="px-4 text-lg text-gray-500 border-r border-gray-400 tracking-wider">
            404
          </div>

          <div className="ml-4 text-lg text-gray-500 uppercase tracking-wider">
            Not Found
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;