import React from 'react';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.content}
            userId={post.userId}
          />
        ))}
      </div>
    </div>
  );
};

// Fetch posts at build time
export const getStaticProps = async () => {
  try {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=10'
    );
    const data = await res.json();

    const posts: PostProps[] = data.map((p: any) => ({
      id: p.id,
      title: p.title,
      content: p.body,
      userId: p.userId,
    }));

    return {
      props: { posts },
    };
  } catch (error) {
    console.error('Failed to fetch posts', error);
    return { props: { posts: [] } };
  }
};

export default PostsPage;
