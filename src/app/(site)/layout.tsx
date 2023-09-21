import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
