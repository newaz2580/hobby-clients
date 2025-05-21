import React from "react";

const Faq = () => {
  return (
    <div>
        <h2 className="text-center my-5 text-5xl font-bold"> Frequently Asked <span className="text-blue-600">Questions</span></h2>
      <div className="collapse collapse-plus bg-base-100 border border-base-300 ">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-semibold">
          What is HobbyHub?
        </div>
        <div className="collapse-content text-sm">
           HobbyHub is a platform that helps people discover, join, and organize local hobby-based groups and events.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          Can I create my own hobby group?
        </div>
        <div className="collapse-content text-sm">
         Absolutely! Once you sign up, you can start a new group, set a location, and invite others
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          Do I need to be an expert in a hobby to join?
        </div>
        <div className="collapse-content text-sm">
         Not at all. HobbyHub is for all levels — beginners, enthusiasts, and experts are all welcome.
        </div>
      </div>

        <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          How do I know when events are happening?
        </div>
        <div className="collapse-content text-sm">
          ou can view upcoming events on the homepage or subscribe to a group to receive event updates."
        </div>
      </div>

        <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          Is my personal information safe?
        </div>
        <div className="collapse-content text-sm">
         Yes, we prioritize your privacy and use secure systems to protect your data.
        </div>
      </div>
    </div>
  );
};

export default Faq;
