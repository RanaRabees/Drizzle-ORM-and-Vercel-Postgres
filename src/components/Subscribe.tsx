"use client";
import React, { useState, useEffect } from "react";
import { Alert, Button } from "react-bootstrap";

const Subscribe = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleOpenAlert = () => {
    setIsAlertOpen(true);
  };

  const handleCloseAlert = () => {
    setIsAlertOpen(false);
  };

  useEffect(() => {
    if (isAlertOpen) {
      setTimeout(() => {
        setIsAlertOpen(false);
      }, 8000);
    }
  }, [isAlertOpen]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert("You have successfully! subscribed to our newsletter.");
  };

  return (
    <section className="newsletter md:pr-0 pr-5 md:pl-0 pl-5 flex flex-col justify-center items-center text-center relative pt-[5rem] lg:pb-[11rem] md:pb-[11rem] pb-10">
      <div className="newsletter-background font-extrabold lg:text-9xl md:text-9xl text-5xl text-gray-200 absolute z-[-1] leading-10">
        Newsletter
      </div>
      <h1 className="mb-7 font-bold text-4xl leading-10 text-gray-900 tracking-widest">
        Subscribe Our Newsletter
      </h1>
      <p className="mt-5 mb-12 font-medium text-lg leading-6 text-gray-900 tracking-wide">
        Get the latest information and promo offers directly
      </p>
      {isAlertOpen && (
        <Alert variant="success" onClose={handleCloseAlert} dismissible>
          <Alert.Heading className="mt-5 mb-6 font-medium text-lg leading-6 text-gray-900 tracking-wide">
            We Will Give You Latest Information And Promo Offers Directly!
          </Alert.Heading>
        </Alert>
      )}
      <form
        className="flex lg:flex-nowrap md:flex-nowrap flex-wrap"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full text-center tracking-wider font-extrabold focus:italic focus:text-left transition-all hover:bg-[#d5d2d2] hover:text-white text-[1.1rem] rounded-xl hover:rounded-3xl hover:shadow-[#a19996] shadow-lg hover:shadow-2xl p-[10px] pr-20 pl-20 lg:mr-5 md:mr-5 mr-0 border-gray-400"
          required
          type="email"
          placeholder="Your Email"
        ></input>
        <button
          className="text-center tracking-wider p-[5px] transition-all lg:bg-transparent md:bg-transparent bg-[#212121] lg:text-[#b92020] md:text-[#b92020] text-white lg:rounded-xl md:rounded-xl rounded-3xl hover:rounded-3xl lg:shadow-lg md:shadow-lg shadow-2xl hover:shadow-[#a19996] hover:shadow-2xl hover:bg-[#212121] hover:text-white hover:font-bold text-[1.1rem] w-full"
          onClick={handleSubmit}
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Subscribe;
