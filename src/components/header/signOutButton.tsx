"use client";
import { signOut } from "next-auth/react";
import { IconLogOut } from "../assets/userIcons";

function SignOutButton() {
  function signOutAction() {
    signOut();
  }
  return (
    <button
      onClick={signOutAction}
      className="gap-2 w-full flex items-center px-4 py-2 text-white text-sm  hover:bg-[#00000040] rounded "
    >
      <span className="text-xl rotate-180">
        <IconLogOut />
      </span>
      <span>Sign out</span>
    </button>
  );
}

export default SignOutButton;
