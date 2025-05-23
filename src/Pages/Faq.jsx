import React from "react";

const Faq = () => {
  return (
    <div>
      <h2 className=" text-center my-10 text-4xl font-bold text-gray-600 dark:text-white">
        {" "}
        Frequently Asked <span className="text-blue-600">Questions</span>
      </h2>
      <div className="collapse mainCard collapse-plus mb-4  bg-base-100 border border-base-300 ">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title  text-xl mainCard text">
          What is HobbyHub?
        </div>
        <div className="collapse-content text-md text-gray-600 mainCard text">
          HobbyHub is a platform that helps people discover, join, and organize
          local hobby-based groups and events.
        </div>
      </div>
      <div className="collapse collapse-plus mb-4 bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title  text-xl mainCard text">
          Can I create my own hobby group?
        </div>
        <div className="collapse-content text-md text-gray-600 mainCard text">
          Absolutely! Once you sign up, you can start a new group, set a
          location, and invite others
        </div>
      </div>
      <div className="collapse collapse-plus mb-4 bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title  text-xl ">
          Do I need to be an expert in a hobby to join?
        </div>
        <div className="collapse-content text-md text-gray-600 ">
          Not at all. HobbyHub is for all levels — beginners, enthusiasts, and
          experts are all welcome.
        </div>
      </div>

      <div className="collapse collapse-plus mb-4 bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title  text-xl  ">
          How do I know when events are happening?
        </div>
        <div className="collapse-content text-md text-gray-600  ">
          ou can view upcoming events on the homepage or subscribe to a group to
          receive event updates."
        </div>
      </div>

      <div className="collapse collapse-plus mb-4 bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title  text-xl  ">
          Is my personal information safe?
        </div>
        <div className="collapse-content text-md text-gray-600  ">
          Yes, we prioritize your privacy and use secure systems to protect your
          data.
        </div>
      </div>
    </div>
  );
};

export default Faq;
