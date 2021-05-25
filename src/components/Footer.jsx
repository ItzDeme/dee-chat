import React from "react";

function Footer() {
  //gets full year and updates it EVERY YEAR Automatically
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <p className="mt-5 mb-3 text-muted text-center">© Dee {year}</p>
    </div>
  );
}
export default Footer;
