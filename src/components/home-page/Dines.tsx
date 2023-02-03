import React from "react";

// @ internal import //
import sheif from "../../assets/images/shef.jpg";

const Dines = () => {
  return (
    <div
      className="hero min-h-[80vh]"
      style={{ backgroundImage: `url(${sheif.src})` }}
    >
      <div className="hero-overlay bg-opacity-40 bg-black"></div>
      <div className=" text-center text-white">
        <div className="w-[60%] mx-auto">
          <h1 className="mb-5 text-6xl font-medium">Sushi Newsletter</h1>
          <p className="mb-5 text-3xl">
            If you would like to stay connected and be the first to know about
            our news, events, and exclusive offers, please sign up for our
            newsletter. You can opt out at any time by clicking unsubscribe on
            the newsletter.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Dines;
