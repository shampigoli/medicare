import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmitReview = async (e)=>{
    e.preventDefault();
  }
  return (
    <form>
      <div>
        <h3 className="text-headingColor lg:text-[22px] mt-5 text-[14px] leading-5 lg:leading-7 font-semibold">
          How would you rate the overall experience?
        </h3>
        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;
            return (
              <button
                key={index}
                type="button"
                className={`${
                  index < ((rating && hover) || hover)
                    ? "text-yellowColor"
                    : "text-gray-400"
                } bg-transparent text-[22px] cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-3">
      <h3 className="text-headingColor lg:text-[22px] mt-5 text-[14px] leading-5 lg:leading-7 font-semibold">
      Share your feedbacks and suggesstions
          </h3>
          <textarea className="mt-5 border-solid border focus:outline-none outline-primaryColor w-full px-5 py-3 rounded-[10px] border-[#0066ff34]" id="" cols="" rows="5" placeholder='Write your message....'
          onChange={(e)=>setReview(e.target.value)}
          ></textarea>
          <button type="submit" onClick={handleSubmitReview} className="btn">Submit Feeddback</button>
      </div>
    </form>
  );
};

export default FeedbackForm;
