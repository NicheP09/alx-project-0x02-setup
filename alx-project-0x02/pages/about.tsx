// pages/about.tsx
import React from 'react';
import Button from '../components/common/Button';

const AboutPage = () => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold mb-4">About Page</h1>

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
  );
};

export default AboutPage;
