import emailjs from "emailjs-com";
import React, { useRef } from "react";
import { TbTriangleFilled } from "react-icons/tb";

const ContactUs = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_x5ldm2h", "template_6dnrytg", form.current, {
        publicKey: "_GMeEG5UFmU_NowVh",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="flex flex-col items-center py-20 px-40 h-[100vh]">
      <span className="flex items-center gap-10">
        <TbTriangleFilled className="-rotate-90" />
        <h3 className="text-xl font-rubik tracking-wider">Get in Touch</h3>
        <TbTriangleFilled className="rotate-90" />
      </span>

      <div className="w-full gap-4 py-10 flex items-center justify-around">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116921.11374778107!2d86.91187345927469!3d23.68365251534014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f0ea1022529%3A0xf888f7e7fd11cefe!2sAsansol%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1716902318458!5m2!1sen!2sin"
          width="50%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
        ></iframe>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-1/2 p-4 mx-10 flex flex-col gap-4"
        >
          <div className="w-full flex gap-4 items-center justify-between">
            <div className="w-1/2 flex flex-col gap-2">
              <label htmlFor="name" className="font-bold text-lg">
                Full Name <b className="text-Gbay-700 font-bold text-xl">*</b>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="E.g. Jaun Dough"
                className="outline-none h-12 px-4 border-[#ffe837] border-2 bg-transparent rounded"
              />
            </div>
            <div className="w-1/2 flex flex-col gap-2">
              <label htmlFor="email" className="font-bold text-lg">
                E-mail <b className="text-Gbay-700 font-bold text-xl">*</b>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="youremail@example.com"
                className="outline-none h-12 px-4 border-[#ffe837] border-2 bg-transparent rounded"
              />
            </div>
          </div>
          <div className="w-full h-60 flex flex-col gap-2">
            <label htmlFor="message" className="font-bold text-lg">
              Your message <b className="text-Gbay-700 font-bold text-xl">*</b>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message here.."
              className="outline-none h-full p-4 border-[#ffe837] border-2 bg-transparent rounded"
            ></textarea>
          </div>
          <input
            type="submit"
            className="active:scale-95 transition-all duration-300 ease-in-out px-4 py-2 bg-[#FFE837] hover:bg-transparent border-2 border-[#ffe837] hover:text-[#ffe837] text-black text-xl font-semibold font-rubik rounded"
            value={"Send Message"}
          />
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
