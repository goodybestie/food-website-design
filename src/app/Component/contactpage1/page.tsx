const ContactPage1 = () => {
  return (
      <div className="p-4">
          <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-2xl space-y-6">
              
              <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Name
                      </label>
                      <input
                          type="text"
                          id="name"
                          name="name"
                          className="mt-1 outline outline-1 outline-[#DBDFD0] block w-full rounded-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                          placeholder="Enter your name"
                      />
                  </div>

                  <div className="w-full">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email
                      </label>
                      <input
                          type="email"
                          id="email"
                          name="email"
                          className="mt-1 block outline outline-1 outline-[#DBDFD0] w-full rounded-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                          placeholder="Enter email address"
                      />
                  </div>
              </div>

              <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject
                  </label>
                  <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="mt-1 block outline outline-1 outline-[#DBDFD0] w-full rounded-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                      placeholder="Write a subject"
                  />
              </div>

              <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                  </label>
                  <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="outline outline-1 outline-[#DBDFD0] mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                      placeholder="Write your message"
                  ></textarea>
              </div>

              <button
                  type="submit"
                  className="w-full bg-[#AD343E] text-white py-2 px-4 rounded-full"
              >
                  Send
              </button>
          </form>
      </div>
  );
}

export default ContactPage1;
