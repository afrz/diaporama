import React from "react";
import "./Root.scss";

const Root = () => {
  return (
    <section className="container">
      <div id="cube">
        <figure className="front">FRONT</figure>
        <figure className="back" />
        <figure className="right" />
        <figure className="left" />
        <figure className="top" />
        <figure className="bottom">BOTTOM</figure>
      </div>
    </section>
  );
};

// const Root = () => {
//   return (
//     <div
//       className="HARD dude"
//       data-city="lyon"
//       data-speciality="XXXXXXXXXXXXXXXXXXXXXX"
//       style={{ height: 203, width: 203 }}
//     >
//       <div className="dude-infos" style={{ left: 0 + "%" }}>
//         <div className="text">
//           <h3 className="dude-infos-name">
//             <span className="name">XXXXXX</span>
//             <span className="surname">XXXXXXXXXXXXXXXXX</span>
//           </h3>
//           <h2 className="dude-infos-speciality">
//             XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//           </h2>
//         </div>
//         <div className="arrow">
//           <div className="square" />
//         </div>
//       </div>
//       <a href="" className="link">
//         <img
//           src="gallery_XXXX.jpg"
//           alt="XXXXXXXXXXXXXXXXXXXXXX"
//           className="photo"
//         />
//         <div className="strips">
//           <div className="strip-right" />
//         </div>
//       </a>
//     </div>
//   );
// };

export default Root;
