import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    desc: "",
    captcha: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    desc: "",
  });

  const [success, setSuccess] = useState("");

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setError((prev) => {
      return {
        ...prev,
        [name]: "",
      };
    });
    setSuccess("");
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    return re.test(email);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const { name, email, desc, captcha } = form;
    if (captcha.length > 0) return;
    if (name.length === 0 || email.length === 0 || desc.length === 0) {
      setError((prev) => {
        return { ...prev, text: "All Fields are Compulsory" };
      });
      if (name.length === 0) {
        setError((prev) => {
          return { ...prev, name: "error" };
        });
      }
      if (email.length === 0 || validateEmail(email)) {
        setError((prev) => {
          return { ...prev, email: "error" };
        });
      }
      if (desc.length === 0) {
        setError((prev) => {
          return { ...prev, desc: "error" };
        });
      }
      return;
    }

    if (!validateEmail(email)) {
      setError((prev) => {
        return { ...prev, email: "error" };
      });
      return;
    }

    const data = {
      name,
      email,
      desc,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch("/email", options)
      .then((res) => res.json())
      .then((json) => {
        setSuccess(json.message);
        setForm({
          name: "",
          email: "",
          desc: "",
          captcha: "",
        });
      })
      .catch((error) => setSuccess(error.message));
  };

  return (
    <section id="contact" className="contact">
      <h2 className="contact_title">Let's Work Together</h2>
      <p className="contact_para">
        Have Something in Mind?
        <br />
        Let's Discuss
      </p>
      <form>
        <div>
          <label htmlFor="name" className="label">
            NAME <br />
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className={error.name}
            value={form.name}
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="label">
            EMAIL <br />
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className={error.email}
            value={form.email}
            onChange={handleInput}
            required
          />
        </div>
        <div className="textarea">
          <label htmlFor="desc">HOW CAN I HELP</label>
          <textarea
            name="desc"
            id="desc"
            cols=""
            rows="10"
            className={error.desc}
            value={form.desc}
            onChange={handleInput}
            required
          ></textarea>
        </div>
        <input
          type="text"
          name="captcha"
          id="captcha"
          value={form.captcha}
          onChange={handleInput}
        />
        <input type="submit" value="SUBMIT" id="submit" onClick={submitForm} />
      </form>
      <p className="success">{success}</p>
      <div className="contact-social">
        <a
          href="https://github.com/jarihant701"
          target="_blank"
          rel="noreferrer"
          title="Github"
          className="contact-links"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/arihant-jain-862503190/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
          className="contact-links"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="mailto:jarihant701@gmail.com"
          className="contact-links"
          target="_blank"
          rel="noreferrer"
          title="Email"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
