import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold mb-4">About Page</h1>

        <p className="text-gray-700 dark:text-gray-300">
          This project demonstrates Next.js routing, reusable components, and
          Tailwind CSS styling.
        </p>

        <div className="flex flex-col gap-3 md:flex-row md:gap-4">
          <Button size="small" shape="rounded-sm">
            Small / Sm
          </Button>
          <Button size="medium" shape="rounded-md">
            Medium / Md
          </Button>
          <Button size="large" shape="rounded-full">
            Large / Full
          </Button>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
