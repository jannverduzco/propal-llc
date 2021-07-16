import React from "react";

function Contact() {
  return (
    <div className="container border"
    s>
      <div>Contact Us</div>
      <form>
        <label>First Name</label>
        <input type="first-name" name="first-name" />
        <label>Last Name</label>
        <input type="last-name" name="last-name" />
        <label>Phone Number</label>
        <input type="phone-number" name="phone-number" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" rows="4"></textarea>
        <input type="submit" value="send" />
      </form>
    </div>
  );
}

export default Contact;
