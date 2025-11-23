import Header from '@/components/layout/Header';

const PostsPage = () => {
  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Posts Page</h1>
        <p className="text-gray-700 dark:text-gray-300">
          List of posts will appear here.
        </p>
      </div>
    </>
  );
};

export default PostsPage;
