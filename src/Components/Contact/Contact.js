import React from "react";
import { FaBuilding, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./contact.css";
import { Link } from "react-router-dom";
export const Contact = () => {
  return (
    <div className="contactdiv">
      <div className="contact-left">
        <h2>Lextra Pharmaceuticals</h2>
        <p>
          <i>
            <FaBuilding />
          </i>{" "}
          M/S Lextra Pharmaceuticals, Panchkula Road, Baltana Zirakpur, Mohali, India (140603)
        </p>
        <p>
          <i>
            <FaPhone />
          </i>{" "}
          +91 486468666, +91 8552845156
        </p>
        <Link to="mailto:lextrapharma@rediffmail.com.com">
          <button type="button" className="btn btn-primary btn-lg btncss emailbtn">
            <MdEmail /> Email us
          </button>
        </Link>
      </div>
      <div className="contact-right">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.215760343167!2d75.78551137482938!3d23.19880630972944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396374196ce8f4ff%3A0x26395d5f37d08107!2sLextra%20Pharmaceuticals!5e0!3m2!1sen!2sin!4v1704199142323!5m2!1sen!2sin"
          title="location"
          width="800"
          height="750"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
