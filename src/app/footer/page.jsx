import Image from "next/image";
import React from "react";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full text-center  py-4 bg-black text-white px-20 mt-5 pt-9 flex flex-wrap gap-14 md:gap-9 justify-center md:justify-between">
      <div className="flex flex-col gap-5">
        <h6 className="text-[20px] font-semibold">Exclusive</h6>
        <h5>Subscribe</h5>
        <p>Get 10% off your first order</p>
        <div>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="px-2 py-1 bg-black border-[1px] border-white"
          />
        </div>
      </div>
      <div>
        <h6 className="text-[17px] font-semibold">Support</h6>
        <ul className=" text-[15px] flex flex-col gap-3 md:gap-5 mt-7">
          <li>
            111 Bijoy sarani, Dhaka,
            <br /> DH 1515, Bangladesh.
          </li>
          <li> exclusive@gmail.com</li>
          <li>+88015-88888-9999</li>
        </ul>
      </div>
      <div>
        <h6 className="text-[17px] font-semibold">Account</h6>
        <ul className=" text-[15px] flex flex-col gap-3 md:gap-5 mt-7">
          <li>My Account</li>
          <li>Login / Register</li>
          <li>+88015-88888-9999</li>
          <li>Card</li>
          <li>Wishlist</li>
          <li>Shop</li>
        </ul>
      </div>
      <div>
        <h6 className="text-[17px] font-semibold">Quick Link</h6>
        <ul className=" text-[15px] flex flex-col gap-3 md:gap-5 mt-7">
          <li>Privacy Policy</li>
          <li>Terms Of Use</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <h6 className="text-[17px] font-semibold">Download App</h6>
        <div className="mt-7">
          <p className="text-[12px]">Save $3 with App New User Only</p>
          <div className="">
            <div className="flex md:justify-start justify-center mt-5">
              <Image src="/QR.svg" height={70} width={70} alt="img" />
              {/* <Image src='/app.svg' height={70} width={70} className='h-[20px]'/> */}
            </div>
            <div className="icone flex gap-8 md:gap-5 mt-7">
              <Facebook />
              <Twitter />
              <Linkedin />
              <Youtube />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
