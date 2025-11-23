// pages/home.tsx
import React, { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { type Post } from '../interfaces';

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      title: 'Getting Started',
      content: 'This project teaches you Next.js basics.',
    },
    {
      title: 'Reusable Components',
      content: 'Build modular UI with TS interfaces.',
    },
    { title: 'Routing', content: 'Next.js has file-based routing.' },
  ]);

  const [modalOpen, setModalOpen] = useState(false);

  const handleAddPost = (post: Post) => {
    setPosts((prev) => [post, ...prev]);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>

      {/* Button to open the modal */}
      <button
        onClick={() => setModalOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Add New Post
      </button>

      {/* Post Modal */}
      <PostModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddPost}
      />

      {/* Display posts */}
      {posts.map((post, index) => (
        <Card key={index} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default HomePage;
