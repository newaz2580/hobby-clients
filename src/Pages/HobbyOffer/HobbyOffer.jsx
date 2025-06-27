import { Link } from "react-router";

const HobbyOffer = () => {
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white py-12 px-6  rounded-xl my-10 shadow-lg">
      <h2 className="text-4xl font-extrabold text-center mb-4 text-blue-700 dark:text-white">🔥 Limited-Time Offer: Launch Your Hobby Group for FREE!</h2>

      <p className="text-center text-lg mb-4 font-medium">
        Are you passionate about something — art, books, bikes, or bites? Now’s your chance to bring people together and lead your very own hobby community!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <ul className="list-disc text-sm space-y-2 pl-6 text-gray-800 dark:text-gray-100">
          <li>✅ Highlighted group visibility on HobbyHub homepage</li>
          <li>✅ Create unlimited events, posts, and announcements</li>
          <li>✅ Use advanced tools to manage members & activities</li>
          <li>✅ Get a custom group banner and profile design</li>
          <li>✅ Earn moderator badges and verified group status</li>
        </ul>

        <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-yellow-300 dark:border-yellow-600 shadow-inner text-sm">
          <h3 className="text-lg font-bold mb-2 text-orange-600 dark:text-orange-600">Offer Details:</h3>
          <p><strong>Duration:</strong> June 26 - July 10, 2025</p>
          <p><strong>Eligibility:</strong> Anyone creating a new group</p>
          <p><strong>Premium Access:</strong> 3 months free (৳0.00)</p>
          <p><strong>Expires:</strong> July 10, 11:59 PM (BST)</p>
        </div>
      </div>

      <p className="mt-6 text-center text-gray-700 dark:text-gray-300 text-sm">
        🎁 Bonus: Top 10 most active new groups will be featured in our July Newsletter with over 10,000 readers!
      </p>

      <div className="flex justify-center mt-8">
        <Link to='/createGroup'>
        <button className="btn bg-blue-800 text-white btn-lg hover:scale-105 transition-transform duration-300">
          🚀 Create a Group Now
        </button>
        </Link>
      </div>
    </div>
  );
};

export default HobbyOffer;
