import EditUserForm from "@/components/pages/account/editUserForm";
import Sidebar from "@/components/pages/account/sidebar";
import Breadcrumb from "@/components/view_product/breadcrumb";

function Account() {
  return (
    <div className="container min-h-screen">
      <div className="flex justify-between py-10">
        <Breadcrumb />
        <div className="flex items-center gap-2">
          <span className="text-black text-xs">Welcome! </span>
          <span className="text-primary text-xs">Kajol Roy</span>
        </div>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-8 ">
        <div className="lg:col-span-2 col-span-8 py-5">
          <Sidebar />
        </div>
        <div className="lg:col-span-6 col-span-8 py-5">
          <EditUserForm />
        </div>
      </div>
    </div>
  );
}

export default Account;
