import React from "react";

const Faq = () => {
  return (
    <div>
        <h2 className="text-center my-5 text-5xl font-bold"> Frequently Asked <span className="text-blue-600">Questions</span></h2>
      <div className="collapse collapse-plus bg-base-100 border border-base-300 ">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-semibold text-2xl">
          What is HobbyHub?
        </div>
        <div className="collapse-content text-xl text-gray-600">
           HobbyHub is a platform that helps people discover, join, and organize local hobby-based groups and events.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold text-2xl">
          Can I create my own hobby group?
        </div>
        <div className="collapse-content text-xl text-gray-600">
         Absolutely! Once you sign up, you can start a new group, set a location, and invite others
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold  text-2xl">
          Do I need to be an expert in a hobby to join?
        </div>
        <div className="collapse-content text-xl text-gray-600">
         Not at all. HobbyHub is for all levels — beginners, enthusiasts, and experts are all welcome.
        </div>
      </div>

        <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold text-2xl">
          How do I know when events are happening?
        </div>
        <div className="collapse-content text-xl text-gray-600">
          ou can view upcoming events on the homepage or subscribe to a group to receive event updates."
        </div>
      </div>

        <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold text-2xl">
          Is my personal information safe?
        </div>
        <div className="collapse-content text-xl text-gray-600">
         Yes, we prioritize your privacy and use secure systems to protect your data.
        </div>
      </div>
    </div>
  );
};

export default Faq;
