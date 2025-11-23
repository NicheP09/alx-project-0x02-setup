import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="p-4 rounded-lg shadow-md bg-white dark:bg-gray-700 space-y-1">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
        {name}
      </h2>
      <p className="text-gray-700 dark:text-gray-300">{email}</p>
      {address && (
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          {address.street}, {address.suite}, {address.city}, {address.zipcode}
        </p>
      )}
    </div>
  );
};

export default UserCard;
