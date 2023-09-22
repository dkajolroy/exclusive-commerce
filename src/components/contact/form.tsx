import ViewMore from "../global/viewmore";

function Form() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-5 items-center">
        <input
          type="text"
          id="search-navbar"
          className="block w-full p-2 pr-10 text-sm font-light text-gray-900 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-gray-400 dark:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white"
          placeholder="Your name"
        />
        <input
          type="text"
          id="search-navbar"
          className="block w-full p-2 pr-10 text-sm font-light text-gray-900 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-gray-400 dark:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white"
          placeholder="Your Email"
        />
        <input
          type="text"
          id="search-navbar"
          className="block w-full p-2 pr-10 text-sm font-light text-gray-900 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-gray-400 dark:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white"
          placeholder="Your Phone "
        />
      </div>
      <div>
        <textarea
          id="message"
          rows={8}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your message here..."
        ></textarea>
      </div>
      <div className="flex justify-end">
        <ViewMore title="Send Message" />
      </div>
    </div>
  );
}

export default Form;
