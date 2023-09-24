import Button from "@/components/global/button";
import Link from "next/link";

function LoginForm() {
  return (
    <div className="flex flex-col gap-5 xl:px-10 ">
      <div>
        <h2 className="text-black text-3xl">Log in to Exclusive</h2>
        <span className="text-xs font-medium text-black">
          Enter your details below
        </span>
      </div>
      {/* form */}
      <ul className="flex flex-col gap-2">
        <li>
          <input
            name="username"
            type="text"
            className="block w-full py-2 pr-10 text-sm font-light focus:placeholder-black transition text-black border-b border-gray-400 focus:outline-none focus:border-gray-500 "
            placeholder="Email or phone number"
          />
        </li>
        <li>
          <input
            name="password"
            type="text"
            className="block w-full py-2 pr-10 text-sm font-light focus:placeholder-black transition text-black border-b border-gray-400 focus:outline-none focus:border-gray-500 "
            placeholder="Password"
          />
        </li>
      </ul>
      <div className="flex justify-between items-center">
        <Button title="Login" />
        <button className="text-primary focus:outline-none hover:brightness-75 text-sm">
          Forget Password ?
        </button>
      </div>
      {/* Forget */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-600">Already have an account ?</span>
        <Link
          className="font-medium text-sm hover:text-gray-600 underline text-black"
          href="/signup"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
