import React from 'react';
import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="p-4 rounded-lg shadow-md bg-white dark:bg-gray-700 space-y-2">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="text-gray-700 dark:text-gray-300">{content}</p>
      {userId && (
        <span className="text-sm text-gray-500 dark:text-gray-400">
          User ID: {userId}
        </span>
      )}
    </div>
  );
};

export default PostCard;
