import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const DoctorReview = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating > 0 && comment.trim()) {
      console.log({ rating, comment });
      setSubmitted(true);
      setRating(0);
      setComment('');
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center p-6 my-10 md:mb-20">
        <h2 className="text-xl sm:text-3xl font-bold text-gray-800 mb-4">Leave a Review for Your Doctor</h2>

        <div className="bg-white p-6 rounded-lg shadow-full w-full max-w-md">
          <form onSubmit={handleSubmit}>
            {/* Star Rating Section */}
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => handleRating(star)}
                  className={`text-2xl ${star <= rating ? 'text-yellow-500' : 'text-gray-400'}`}
                >
                  ★
                </button>
              ))}
            </div>

            {/* Comment Section */}
            <textarea
              className="w-full h-32 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0cc1e0] mb-4"
              placeholder="Leave your comments here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="py-2 px-4 bg-[#0cc1e0] hover:bg-[#0cc1e0] text-white rounded-lg transition duration-300 ease-in-out"
            >
              Submit Review
            </button>
          </form>

          {/* Success Message */}
          {submitted && (
            <p className="mt-4 text-green-600">Thank you for your review!</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DoctorReview;