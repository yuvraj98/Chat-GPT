import React from 'react';
import { Link } from 'react-router-dom';
import logoUrl from "../../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-richblack-700 text-white py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center">
          <img src={logoUrl} alt="gpt3 logo" className="mb-4 md:mb-0 md:mr-4 w-24" />
          <div>
            <p className="text-sm">Yuvraj Chavan, All Rights Reserved</p>
            <p className="text-sm mt-2">7499676023</p>
            <p className="text-sm mt-2"><Link to="#" className="hover:underline">rajchavan171@gmail.com</Link></p>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h4 className="font-medium mb-2">Links</h4>
              <ul className="list-none pl-0">
                <li className="mb-2"><Link to="#" className="text-sm hover:underline">Over ons</Link></li>
                <li className="mb-2"><Link to="#" className="text-sm hover:underline">Social Media</Link></li>
                <li className="mb-2"><Link to="#" className="text-sm hover:underline">Counters</Link></li>
                <li><Link to="#" className="text-sm hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h4 className="font-medium mb-2">Company</h4>
              <ul className="list-none pl-0">
                <li className="mb-2"><Link to="#" className="text-sm hover:underline">Terms & Conditions</Link></li>
                <li className="mb-2"><Link to="#" className="text-sm hover:underline">Privacy Policy</Link></li>
                <li><Link to="#" className="text-sm hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="font-medium mb-2">Get in touch</h4>
              <ul className="list-none pl-0">
                <li className="mb-2"><p className="text-sm">LinkedIn</p></li>
                <li className="mb-2"><p className="text-sm">7499676023</p></li>
                <li><Link to="#" className="text-sm hover:underline">rajchavan171@gmail.com</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">©2024 GPT-3. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
