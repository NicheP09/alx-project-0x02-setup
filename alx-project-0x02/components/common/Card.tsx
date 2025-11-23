// components/common/Card.tsx
import React from 'react';
import { type CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="p-4 border rounded-md shadow-sm bg-white dark:bg-gray-800">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 dark:text-gray-200">{content}</p>
    </div>
  );
};

export default Card;
