import TextInput from "../global/textInput";
import ViewMore from "../global/viewmore";

function Form() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-5 items-center">
        <TextInput name="my-name" placeholder="Your name" />
        <TextInput name="my-email" placeholder="Your Email" />
        <TextInput name="my-phone" placeholder="Your Phone" />
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
