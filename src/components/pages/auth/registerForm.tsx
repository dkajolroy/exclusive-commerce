"use client";
import Button from "@/components/global/button";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function RegisterForm() {
  // Store input data
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    name: "",
    password: "",
  });
  // Search parameters
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const callbackUrl = searchParams.get("callbackUrl");

  // Registration with form data
  function registerWithFormData() {
    // axios sign in
  }

  // Login with google
  function loginWithGoogle() {
    signIn("google", { callbackUrl: "/" });
  }

  return (
    <div className="flex flex-col gap-5 xl:px-10 ">
      <div>
        <h2 className="text-black text-3xl">Create an account</h2>
        <span className="text-xs font-medium text-black">
          Enter your details below
        </span>
      </div>
      {/* form */}
      <ul className="flex flex-col gap-2">
        <li>
          <input
            name="user-name"
            onChange={({ target }) =>
              setFormData((s) => ({ ...s, name: target.value }))
            }
            type="text"
            className="block w-full py-2 pr-10 text-sm font-light focus:placeholder-black transition text-black border-b border-gray-400 focus:outline-none focus:border-gray-500 "
            placeholder="Full name"
          />
        </li>
        <li>
          <input
            name="username"
            onChange={({ target }) =>
              setFormData((s) => ({ ...s, emailOrPhone: target.value }))
            }
            type="text"
            className="block w-full py-2 pr-10 text-sm font-light focus:placeholder-black transition text-black border-b border-gray-400 focus:outline-none focus:border-gray-500 "
            placeholder="Email or phone number"
          />
        </li>
        <li>
          <input
            name="password"
            onChange={({ target }) =>
              setFormData((s) => ({ ...s, password: target.value }))
            }
            type="text"
            className="block w-full py-2 pr-10 text-sm font-light focus:placeholder-black transition text-black border-b border-gray-400 focus:outline-none focus:border-gray-500 "
            placeholder="Password"
          />
        </li>
      </ul>
      <div className="flex flex-col gap-2">
        <Button onClick={registerWithFormData} title="Create Account" />
        <button
          onClick={loginWithGoogle}
          className="border border-gray-400 rounded hover:bg-gray-100 hover:border-gray-500 transition-all text-xs  py-3 focus:outline-none"
        >
          Login with Google
        </button>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-600">
            Already have an account ?
          </span>
          <Link
            className="font-medium text-sm hover:text-gray-600 underline text-black"
            href={`/auth/signin${
              callbackUrl ? "?callbackUrl=" + callbackUrl : ""
            }`}
          >
            Login in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
