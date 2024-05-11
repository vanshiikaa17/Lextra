import React from "react";
import img1 from "../../pictures/qstan.jpg";
import img2 from "../../pictures/qstan2.jpg";
import img3 from "../../pictures/qstan3.jpg";
import img4 from "../../pictures/qstan4.jpg";
import "./about.css";

export const QStandards = () => {
  return (
    <div className="aboutPage">
      <div>
        <h1>
          Unleashing Excellence: A Symphony of Quality and Affordability in
          Pharmaceutical Innovation
        </h1>
        <p  className="qstanhead">
          Lextra: Pioneering Quality in Pharmaceuticals, Redefining Healthcare
          Excellence.
        </p>
      </div>
      <div className="para4">
        <img src={img1} alt="quality standards" />
        <div className="para4p">
          <p>
            Our advanced manufacturing facility, strategically situated in
            Himachal Pradesh and Punjab, employs state-of-the-art technology. As
            a research-driven pharmaceutical company, we unwaveringly adhere to
            WHO-GMP norms, ensuring the pinnacle of quality and affordability.
          </p>
        </div>
      </div>
      <div>
        <p>
          This commitment to excellence is a shared mission embraced by diverse
          departments including materials, production, engineering, stores,
          medical, marketing, quality control, and quality assurance.
        </p>
        <p>
        Through
          collaborative efforts, each department plays a pivotal role in
          surpassing global pharmaceutical standards. Our comprehensive approach
          underscores the fusion of cutting-edge technology and unwavering
          dedication, reinforcing our position as a leader in delivering
          pharmaceutical solutions that prioritize both quality and
          accessibility.
        </p>
      </div>
      <div>
      <img src={img2} alt="quality standards" />
      <img src={img4} alt="quality standards" />
      <img src={img3} alt="quality standards" />

        <div className="para2p qstancol">

          <p>
            A dedicated team monitoring, encompassing validation, GMP
            documentation, self-audits, training, and addressing market
            complaints. The paramount objective is achieving an unparalleled
            standard of "quality" through universal commitment to our quality
            policy and principles. Lextra Pharmaceuticals is duly registered with the Registrar of Firms and holds an import-export code. 
          </p>
        </div>
      </div>
      <div>
        <p>
        Additionally, all our brands are officially registered under the Trademark Registration Act in India, underscoring our commitment to legal compliance and ensuring the authenticity and integrity of our pharmaceutical products.
        </p>
      </div>
    </div>
  );
};
