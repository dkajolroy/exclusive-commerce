import ImageFade from "@/components/global/imageFade";
import LoginForm from "@/components/pages/auth/loginForm";
import Breadcrumb from "@/components/view_product/breadcrumb";

function Login() {
  return (
    <div className="container">
      <div className="flex justify-between py-10">
        <Breadcrumb />
      </div>
      <div className="grid md:grid-cols-7 lg:grid-cols-3 gap-5 items-center pb-20">
        <div className="col-span-2 lg:col-span-2 md:col-span-4">
          <ImageFade
            className="opacity-0 duration-500 rounded transition-all w-full h-full object-cover"
            width={300}
            height={500}
            src="https://res.cloudinary.com/kajolroy/image/upload/v1649315822/cld-sample.jpg"
            priority={true}
            alt="Neil image"
          />
        </div>
        {/* Login Form */}
        <div className="col-span-2 lg:col-span-1 md:col-span-3">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;
