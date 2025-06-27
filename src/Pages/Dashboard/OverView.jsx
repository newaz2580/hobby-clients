import React from 'react';
import { useLoaderData } from 'react-router';

const OverView = () => {
  const hobbyData = useLoaderData();

  // Count hobby by category
  const categoryCount = hobbyData.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  // Count total members
  const totalMembers = hobbyData.reduce((acc, item) => acc + (parseInt(item.members) || 0), 0);

  return (
    <div className="p-6 space-y-6">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total Groups */}
        <div className="bg-gray-100 p-4 rounded shadow-sm text-center">
          <h3 className="text-lg font-medium text-gray-700">Total Groups</h3>
          <p className="text-2xl font-bold text-blue-600">{hobbyData.length}</p>
        </div>

        {/* Total Members */}
        <div className="bg-gray-100 p-4 rounded shadow-sm text-center">
          <h3 className="text-lg font-medium text-gray-700">Total Members</h3>
          <p className="text-2xl font-bold text-red-500">{totalMembers}</p>
        </div>

        {/* Categories */}
        <div className="bg-gray-100 p-4 rounded shadow-sm">
          <h3 className="text-lg font-medium text-gray-700 mb-2 text-center">Categories</h3>
          <ul className="text-sm text-gray-600 space-y-1 grid grid-cols-1 md:grid-cols-2">
            {Object.entries(categoryCount).map(([category, count]) => (
              <li key={category}>
                <span className="font-medium">{category}:</span> {count}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-gray-700 text-lg leading-relaxed">
  <span className="font-bold text-indigo-700">HobbyHub</span> – your ultimate platform for discovering, organizing, and growing hobby communities. 
  Whether you're into painting, cycling, gaming, music, photography, or cooking, HobbyHub helps you connect with like-minded individuals who share your passion.
  <br /><br />
  Create your own group, manage events, invite members, and foster engagement with ease. Our intuitive dashboard provides all the tools you need to track group activity, member involvement, and category growth in real-time.
  <br /><br />
  At HobbyHub, we believe hobbies bring joy, creativity, and community. So dive in, explore new interests, and start building your own hub of inspiration today!
</p>

    </div>
  );
};

export default OverView;
