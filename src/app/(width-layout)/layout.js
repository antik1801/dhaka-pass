import React from "react";
import localFont from "next/font/local";
import MobileNavbar from "@/components/navbar/MobileNavbar";
import DefaultNavbar from "@/components/navbar/DefaultNavbar";

import { Poppins } from 'next/font/google'
import Container from "@/components/container/Container";

const poppins = Poppins({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
  })

const MainLayout = ({ children }) => {
  return (
    <div className={`bg-[#ECE4E4] ${poppins.className} `}>
      <div >
        <Container>
          {" "}
          <MobileNavbar />{" "}
        </Container>
        <Container>
          {" "}
          <DefaultNavbar />{" "}
        </Container>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
