import React from 'react';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </div>
    </div>
  );
};

// Fetch users at build time
export const getStaticProps = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    // Map the fetched data to UserProps format
    const users: UserProps[] = data.map((u: any) => ({
      id: u.id,
      name: u.name,
      email: u.email,
      address: u.address,
    }));

    return {
      props: { users },
    };
  } catch (error) {
    console.error('Failed to fetch users', error);
    return { props: { users: [] } };
  }
};

export default UsersPage;
