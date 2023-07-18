import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-500 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl nt-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Below form to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/a9748943-b06f-4690-8fd2-3360d59cf272"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md duration:500 hover:scale-110
            "
            >
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
