import React from "react";
import Title from "../Title";

export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="Contact us" />
          <form
            className="mt-5"
            action="https://formspree.io/adilike_francis@yahoo.com"
            method="POST"
          >
            {/* {first} */}
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="john smith"
                className="form-control"
              />
            </div>
            {/* {email} */}
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="email@email.com"
                className="form-control"
              />
            </div>
            {/* {subject} */}
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="important!!!!!"
                className="form-control"
              />
            </div>
            {/* {message} */}
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                rows="10"
                placeholder="hello there .."
              ></textarea>
            </div>
            {/* {submit} */}
            <div className="form-group mt-3">
              <input
                type="submit"
                value="send"
                className="form-control bg-primary text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
