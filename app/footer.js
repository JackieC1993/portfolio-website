// "use client";
// // components/Footer.js
// import React from 'react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
//   return (
//     <footer>
//       <p>Copyright © {currentYear}, Jackie Cheung, All Rights Reserved.</p>
//     </footer>
//   );
// };

// export default Footer;

"use client";
// components/Footer.js
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-text">
        Copyright © {currentYear}, Jackie Cheung, All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;