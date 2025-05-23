import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
   
        <div>
          <h3 className="text-2xl font-bold mb-4 text-orange-500">HobbyHub</h3>
          <p className="text-sm">
            Connecting hobby enthusiasts through local groups and events to share passions and make friends.
          </p>
        </div>

       
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="allgroup" className="hover:text-blue-400 transition">All Groups</a></li>
            <li><a href="/createGroup" className="hover:text-blue-400 transition">Create Group</a></li>
            <li><a href="/group" className="hover:text-blue-400 transition">My Group</a></li>
            
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
          <p>Email: support@hobbyhub.com</p>
          <p>Phone: +880 123-4567890</p>
          <p>Address: 123 Hobby St, Creativity City</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400 text-xl">
            <a href="#" className="hover:text-blue-600 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} HobbyHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;