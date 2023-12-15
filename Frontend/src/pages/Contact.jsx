import React from "react";

const Contact = () => {
  return (
    <div className="px-4 mx-auto max-w-screen-md">
      <h2 className="heading text-center">Contact Us</h2>
      <p className="text__para mb-8 lg:mb-16 font-light text-center w-full">
        Got a techinal issue? Wnat to send feedback about a beta feature? Let us
        know.
      </p>
      <form action="#" className="space-y-8">
        <div className="">
          <label htmlFor="email" className="form__label text-[20px]">
            Your&nbsp;Email
          </label>
          <input
            type="email"
            placeholder="@example.gmail.com"
            id="email"
            className="form__input mt-1"
          />
        </div>
        <div>
          <label htmlFor="subject" className="form__label text-[20px]">
            Subject
          </label>
          <input
            type="email"
            placeholder="Let us know how can I help you"
            id="subject"
            className="form__input"
          />
        </div>
        <div>
          <label htmlFor="message" className="form__label text-[20px]">
           Your  Message
          </label>
          <textarea
          rows={6}
            type="email"
            placeholder="Leave a comment here..."
            id="message"
            className="form__input"
          />
        </div>
        <button type="submit" className="btn rounded-lg mt-0">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
