import Button from "@/components/global/button";
import TextInput from "@/components/global/textInput";

function EditUserForm() {
  return (
    <div className="shadow p-10  rounded-md">
      <h2 className="text-primary font-medium">Edit Your Profile</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 py-2">
        {/* Name */}
        <div className="flex flex-col gap-1">
          <span className="text-xs">Full Name</span>
          <TextInput name="my_name" placeholder="Your name" />
        </div>
        {/* Email */}
        <div className="flex flex-col gap-1">
          <span className="text-xs">Email Address</span>
          <TextInput name="my_email" placeholder="Your Email" />
        </div>
        {/* Phone */}
        <div className="flex flex-col gap-1">
          <span className="text-xs">Phone Number</span>
          <TextInput name="my_phone" placeholder="Your Phone" />
        </div>
        {/* Address */}
        <div className="flex flex-col gap-1">
          <span className="text-xs">Address</span>
          <TextInput name="my_address" placeholder="Your Address" />
        </div>
      </div>
      <div className="flex justify-end items-center gap-5 py-5">
        <button className="focus:outline-none text-sm hover:bg-gray-200 bg-gray-100 transition py-4 rounded px-10">
          Discard
        </button>
        <Button title="Save Changes" />
      </div>
    </div>
  );
}

export default EditUserForm;
