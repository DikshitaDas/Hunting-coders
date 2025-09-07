import Head from "next/head";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, message };

    try {
      const res = await fetch("/api/postcontact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Please try again later.");
    }
  };

  const handleChange = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "message") {
      setMessage(e.target.value);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - My Blog</title>
        <meta
          name="description"
          content="Get in touch with us via this contact form. We'd love to hear from you!"
        />
      </Head>

      <div className="container my-5">
        <h1 className="text-center mb-3">Contact Us</h1>
        <p className="text-center text-muted mb-4">
          Have questions, feedback, or collaboration ideas? Fill out the form
          below.
        </p>

        <form
          className="mx-auto p-4 rounded"
          style={{
            maxWidth: "500px",
            background: "#f9f9f9",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          }}
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              value={message}
              onChange={handleChange}
              rows="5"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

<button
  type="submit"
  className="btn w-100 mb-3"
  style={{
    background: "linear-gradient(90deg, #667eea)",
    color: "#fff",
    fontWeight: "600",
    border: "none",
    borderRadius: "12px",
    padding: "0.75rem 1.5rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
  }}
>
  Send Message
</button>

        </form>
      </div>
    </>
  );
}
