import { useState } from "react";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  let values, names;
  const data = (e) => {
    values = e.target.value;
    names = e.target.name;
    setUser({ ...user, [names]: values });
  };

  const send = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = user;
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    };
    const send = await fetch(
      "https://react-ecommerce-c072d-default-rtdb.firebaseio.com/Message.json",
      option
    );
    if (send) {
      alert("Message Sent");
    } else {
      alert("Error Occurred Message sent failed");
    }
  };

  return (
    <div className="contact flex justify-center items-center h-screen">
      <div className="containers w-[80%]  sm:w-1/3 p-6 bg-gray-100 rounded-lg shadow-lg">
        <div className="form">
          <h2 className=" text-2xl font-semibold mb-4 text-center">
            Contact Us
          </h2>
          <form method="POST">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={user.name}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Name"
                onChange={data}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Email"
                onChange={data}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={user.subject}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Subject"
                onChange={data}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                rows="4"
                placeholder="Message"
                value={user.message}
                onChange={data}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
                onClick={send}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
