import React from "react";
import Container from "../container/Container";
import Image from "next/image";

const KnowMore = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between mt-36 gap-x-32 items-center">
        <div className="w-full">
          <p
            style={{ fontFamily: "YourFont" }}
            className="text-3xl lg:text-5xl"
          >
            {" "}
            Know More About DHAKA PASS
          </p>
          <p className="mt-12">
            DHAKA PASS is your go-to platform for all your ticketing needs in
            Bangladesh . We are a trusted ticketing company that offers a wide
            range of services to help you manage and sell tickets for concerts,
            events, and more.Our mission is to simplify the ticketing process
            for both event organizers and attendees. We offer a user-friendly
            platform that enables event organizers to easily manage ticket
            sales, track attendance, and analyze data. Our platform also
            provides attendees with a seamless ticket purchasing experience,
            with a range of payment options and instant delivery of tickets.
          </p>
        </div>
        <div className="hidden lg:block w-full">
          <Image src={"/rec.png"} width={611} height={566} />
        </div>
      </div>
    </Container>
  );
};

export default KnowMore;
