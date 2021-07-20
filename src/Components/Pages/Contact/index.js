import React, { useState } from "react";
import "./style.css";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function Contact() {
  const [value, setValue] = useState();
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

        <label>Phone Number</label>
        
          <PhoneInput
            placeholder="Phone Number"
            value={value}
            onChange={setValue}
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
