import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [errMsg, setErrMsg] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "",  // service id
        "", // template id
        form.current,
        ""  // user id
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMsg("Message sent successfully!");
          setErrMsg({
            username: "",
            phoneNumber: "",
            email: "",
            message: "",
          });
          setFormData({
            username: "",
            phoneNumber: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          setSuccessMsg("");
          setErrMsg({
            username: "Error sending message. Please try again later.",
            phoneNumber: "",
            email: "",
            message: "",
          });
        }
      );
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrMsg({ ...errMsg, [e.target.name]: "" });
  };

  const handleSend = (e) => {
    e.preventDefault();

    const { username, phoneNumber, email, message } = formData;

    if (!username) {
      setErrMsg({ ...errMsg, username: "Please enter your name." });
    } else if (!phoneNumber) {
      setErrMsg({ ...errMsg, phoneNumber: "Please enter your phone number." });
    } else if (!email) {
      setErrMsg({ ...errMsg, email: "Please enter your email address." });
    } else if (!emailValidation(email)) {
      setErrMsg({ ...errMsg, email: "Please provide a valid email address." });
    } else if (!message) {
      setErrMsg({ ...errMsg, message: "Please enter your message." });
    } else {
      sendEmail(e);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lg:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lg:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lg:p-8 rounded-lg shadow-shadowOne">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-full flex flex-col gap-6 py-5"
            >
              {(errMsg.username ||
                errMsg.phoneNumber ||
                errMsg.email ||
                errMsg.message ||
                successMsg) && (
                <p
                  className={`py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce`}
                >
                  {errMsg.username ||
                    errMsg.phoneNumber ||
                    errMsg.email ||
                    errMsg.message ||
                    successMsg}
                </p>
              )}

              <div className="w-full flex flex-col lg:flex-row gap-10">
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                  <p
                    className={`text-sm text-gray-400 uppercase tracking-wide ${
                      errMsg.username ? "text-orange-500" : ""
                    }`}
                  >
                    Your name
                  </p>
                  <input
                    onChange={handleInputChange}
                    value={formData.username}
                    name="username"
                    placeholder="Please enter your name..."
                    className={`${
                      errMsg.username ? "outline-designColor" : ""
                    } contactInput`}
                    type="text"
                  />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                  <p
                    className={`text-sm text-gray-400 uppercase tracking-wide ${
                      errMsg.phoneNumber ? "text-orange-500" : ""
                    }`}
                  >
                    Phone Number
                  </p>
                  <input
                    onChange={handleInputChange}
                    value={formData.phoneNumber}
                    name="phoneNumber"
                    placeholder="Please enter your phone number..."
                    className={`${
                      errMsg.phoneNumber ? "outline-designColor" : ""
                    } contactInput`}
                    type="tel"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p
                  className={`text-sm text-gray-400 uppercase tracking-wide ${
                    errMsg.email ? "text-orange-500" : ""
                  }`}
                >
                  Email
                </p>
                <input
                  onChange={handleInputChange}
                  value={formData.email}
                  name="email"
                  className={`${
                    errMsg.email ? "outline-designColor" : ""
                  } contactInput`}
                  type="email"
                  placeholder="Please enter valid email address..."
                />
              </div>

              <div className="flex flex-col gap-4">
                <p
                  className={`text-sm text-gray-400 uppercase tracking-wide ${
                    errMsg.message ? "text-orange-500" : ""
                  }`}
                >
                  Message
                </p>
                <textarea
                  onChange={handleInputChange}
                  value={formData.message}
                  placeholder="Your message here..."
                  name="message"
                  className={`${
                    errMsg.message ? "outline-designColor" : ""
                  } contactTextArea`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>

              <div className="w-full">
                <button
                  type="submit"
                  value="Send"
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
              {(errMsg.username ||
                errMsg.phoneNumber ||
                errMsg.email ||
                errMsg.message ||
                successMsg) && (
                <p
                  className={`py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce`}
                >
                  {errMsg.username ||
                    errMsg.phoneNumber ||
                    errMsg.email ||
                    errMsg.message ||
                    successMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
