import React from "react";

// social media
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";
import Youtube from "../images/youtube.png";

// Function to get the current month and year
const getCurrentMonthAndYear = () => {
  const date = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${year}`;
};

function Footer() {
  return (
    <div className="bg-black/75 py-4 text-center">
      <footer className="flex gap-2 justify-center items-center">
        <img src={Facebook} alt="facebook" className="w-8 h-8" />
        <img src={Instagram} alt="instagram" className="w-8 h-8" />
        <img src={Youtube} alt="youtube" className="w-8 h-8" />
      </footer>

      <small className="text-white italic">&#169; SnapShots, {getCurrentMonthAndYear()}</small>
    </div>
  );
}

export default Footer;
