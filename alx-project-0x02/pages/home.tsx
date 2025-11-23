import Card from '@/components/common/Card';

const HomePage = () => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>

      <Card
        title="Getting Started"
        content="This project teaches you the basics of Next.js, TypeScript, and Tailwind CSS."
      />

      <Card
        title="Reusable Components"
        content="Learn how to build modular UI elements using TypeScript interfaces."
      />

      <Card
        title="Routing"
        content="Next.js provides file-based routing for easy navigation."
      />
    </div>
  );
};

export default HomePage;
