import React, { useState } from "react";
import "./style.css";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function Contact() {
  const [value, setValue] = useState();
  return (
    <div className="container">
      <form
        className="form"
        action="https://formsubmit.co/jalvarado@propalllc.com"
        method="POST"
      >
        <h1>Contact Us</h1>

        <label>Name</label>
        <input type="text" placeholder="Name" required />

        <label>Email</label>
        <input type="email" name="email" placeholder="Email Address" required />

        <label>Phone Number</label>

        <PhoneInput
          placeholder="Phone Number"
          value={value}
          onChange={setValue}
        />

        <label>Message</label>
        <textarea placeholder="Message"></textarea>

        <input
          type="hidden"
          name="_subject"
          value="New Client Lead via Propal LLC Website!"
        ></input>
        {/* Auto respnse to inquiry */}
        <input
          type="hidden"
          name="_autoresponse"
          value="Thank you for reaching out to Propal, LLC. We will contact you within 1-2 business days or any provided specified time."
        ></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
