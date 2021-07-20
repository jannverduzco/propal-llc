import React, { useState } from "react";
import "./style.css";

function Contact() {
  return (
    <div className="container">
      <form className="form">
        <h1>Contact Us</h1>

        <label>Name</label>
        <input
          placeholder="Name"
          // value={name}
          // onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          placeholder="Email"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
        />

        <label>Message</label>
        <textarea
          placeholder="Message"
          // value={message}
          // onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button
          type="submit"
          // style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
