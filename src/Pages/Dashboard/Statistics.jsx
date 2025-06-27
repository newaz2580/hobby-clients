import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { useLoaderData } from 'react-router';
import OverView from './OverView';

const DashboardOverview = () => {
    const {user}=useContext(AuthContext)
    
    const totalItems=useLoaderData()
   const myItems = totalItems.filter(item => item.email === user?.email);

 

  return (
  <>
  <section className="p-6 space-y-6">
    <h2 className="text-2xl font-semibold text-gray-800">📚 HobbyHub Overview</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Total Items */}
      <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-blue-500">
        <h3 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
          📦 Total Items
        </h3>
        <p className="text-3xl font-bold text-blue-600">{totalItems.length}</p>
      </div>

      {/* My Items */}
      <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-green-500">
        <h3 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
          👤 My Items
        </h3>
        <p className="text-3xl font-bold text-green-600">{myItems.length}</p>
      </div>

      {/* User Info */}
      <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-purple-500">
        <h3 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
          🧑‍💻 User Info
        </h3>
        {user ? (
          <>
            <p><strong>Name:</strong> {user.displayName || "N/A"}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </>
        ) : (
          <p>No user logged in</p>
        )}
      </div>
    </div>
  </section>

  {/* Extended Overview */}
  <OverView />
</>


  );
};

export default DashboardOverview;
