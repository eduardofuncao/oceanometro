import React from 'react';

const AdminPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Quick Stats</h2>
          <ul className="list-disc list-inside">
            <li>Number of Users: 120</li>
            <li>System Uptime: 24 days</li>
          </ul>
        </div>
        <div className="bg-blue-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Latest Activity</h2>
          <ul className="list-disc list-inside">
            <li>User 'Eduardo' logged in 2 hours ago</li>
            <li>User 'Eduardo' updated profile yesterday</li>
            <li>New donation created this morning</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Perform System Check
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
