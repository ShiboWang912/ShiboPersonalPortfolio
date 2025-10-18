import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
       if (!form.name?.trim() || !form.email?.trim() || !form.message?.trim()) {
     alert("Please fill out your name, email, and message.");
     return;
   }
    setLoading(true);

    emailjs
      .send(
        "service_3hdamkq",
        "template_jetl5zs",
        {
          from_name: form.name,
          to_name: "Shibo",
          from_email: form.email,
          to_email: "shibowang7@gmail.com",
          message: form.message,
        },
        "pZxV10qluTx618fQW"
      )
      // +   emailjs
    //  .send(
    //    "service_e6zkb4e",
    //    "template_b0kb3n4",
    //    {
    //      // ⚠️ These keys MUST match the variables defined in your EmailJS template
    //      from_name: form.name,
    //      from_email: form.email,
    //      message: form.message,
    //      // If your template defines reply_to or to_name, include them exactly:
    //      // reply_to: form.email,
    //      // to_name: "Shibo",
    //    },
    //    // v4 style: pass an options object so it works across versions reliably
    //    { publicKey: "pZxV10qluTx618fQW" }
    //  )

      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        async (error) => {
          setLoading(false);
          // console.error(error);
                   // EmailJS gives a helpful text body for 400s—log it so we know *why*
         try {
           // SDK error can carry .text or .message; also try to unwrap response
           console.error("EmailJS error object:", error);
           if (error?.text) console.error("EmailJS error text:", error.text);
           // Some environments: error is a Response-like object
           if (error instanceof Response) {
             const txt = await error.text();
             console.error("EmailJS response text:", txt);
           }
         } catch (e2) {
           console.error("Failed to read error text:", e2);
         }
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#dbdbdb] p-8 rounded-2xl border-solid border-2 border-[#927a7a]"
        //className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"rgb(146 122 122)
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 style={{ color: "black", fontWeight: "500", fontSize: "36px" }}>
          Contact.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-black font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-[#f0f8ff] py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-black font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email address?"
              className="bg-[#f0f8ff] py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-black font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-[#f0f8ff] py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-[#222a2a] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        style={{ filter: "grayscale(0.7)" }}      
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
