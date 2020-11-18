import "./Footer.css";
import React from "react";

let copyright = "Copyright \u00a9 David Lutrick 2020";

function Footer() {
  return (
    <div className="footer">
      <p id="copyright">{copyright}</p>
    </div>
  );
}

export default Footer;
