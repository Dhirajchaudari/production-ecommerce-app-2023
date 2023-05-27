import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title="Contact us">
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="conatactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            {" "}
            any quries and info about product feel free to call anytime we 24x7
            available
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerce.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 12-1234567
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-000-000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
