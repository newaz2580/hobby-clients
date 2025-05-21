const testimonials = [
  {
    name: "Aisha Rahman",
    feedback: "Thanks to HobbyHub, I found a weekly painting group that reignited my creativity!",
    hobby: "Painting",
    rating: 5,
    date: "May 12, 2025"
  },
  {
    name: "Rafiq Ahmed",
    feedback: "Joining the cycling group helped me stay fit and make new friends in my area.",
    hobby: "Cycling",
    rating: 4,
    date: "May 10, 2025"
  },
  {
    name: "Tanisha Karim",
    feedback: "I love how easy it is to find nearby events. The photography club is amazing!",
    hobby: "Photography",
    rating: 5,
    date: "May 8, 2025"
  },
  {
    name: "Jahidul Islam",
    feedback: "I created my own chess group and now we meet every weekend. Great experience!",
    hobby: "Chess",
    rating: 4,
    date: "May 5, 2025"
  },
  {
    name: "Meherin Sultana",
    feedback: "The gardening community has been so welcoming and helpful for beginners.",
    hobby: "Gardening",
    rating: 5,
    date: "May 3, 2025"
  },
  {
    name: "Fahim Hasan",
    feedback: "Book club discussions are fun and engaging. It's now my monthly highlight.",
    hobby: "Reading",
    rating: 5,
    date: "May 1, 2025"
  }
];

const StarRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="text-yellow-400">
      {[...Array(totalStars)].map((_, i) => (
        <span key={i}>{i < rating ? "★" : "☆"}</span>
      ))}
    </div>
  );
};

const Testimonials = () => (
  <section className="bg-gray-100 py-12">
    <div className="w-full mx-auto px-4 text-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-3">
        Hear From Our <span className="text-blue-600">Happy Members</span>
      </h2>
      <p className="text-lg text-gray-600 mb-10">
        Real stories from people who found joy, friends, and inspiration through HobbyHub.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, i) => (
          <div key={i} className="bg-gradient-to-r from-cyan-300 to-purple-500 shadow-lg rounded-2xl p-6 text-left transition transform hover:-translate-y-1 hover:shadow-xl">
            <p className=" text-gray-700 mb-3">“{testimonial.feedback}”</p>
            <StarRating rating={testimonial.rating} />
            <div className="mt-4">
              <h4 className="font-bold text-lg text-gray-800">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.hobby} Enthusiast</p>
              <p className="text-xs text-gray-400 mt-1">{testimonial.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;