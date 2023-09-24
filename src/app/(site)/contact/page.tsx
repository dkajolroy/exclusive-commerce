import {
  IconEmailOutline,
  IconTelephone,
} from "@/components/assets/contactIcon";
import Form from "@/components/pages/contact/form";
import Label from "@/components/pages/contact/label";
import Breadcrumb from "@/components/view_product/breadcrumb";

function Contact() {
  return (
    <div className="container">
      <div className="pt-10">
        <Breadcrumb />
      </div>
      <div className="lg:flex gap-5 lg:my-20 my-5">
        <div className="lg:w-1/3 my-5 lg:my-0 border shadow-sm p-5 rounded">
          <div className=" flex flex-col gap-3">
            <Label icon={<IconTelephone />} title="Call to us" />
            <span className="text-xs">
              We are available 24/7, 7 days a week.
            </span>
            <span className="text-xs">Phone: +8801611112222</span>
          </div>
          <div className="border-t border-gray-500 w-full my-5"></div>
          <div className=" flex flex-col gap-3">
            <Label icon={<IconEmailOutline />} title="Call to us" />
            <span className="text-xs">
              Fill out our form and we will contact you within 24 hours.
            </span>
            <span className="text-xs">Emails: customer@exclusive.com</span>
            <span className="text-xs">Emails: support@exclusive.com</span>
          </div>
        </div>
        <div className="lg:w-2/3 my-5 lg:my-0 border shadow-sm p-5 rounded">
          {/* Form */}
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Contact;
