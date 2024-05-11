import React from "react";
import "./about.css";
import img1 from "../../pictures/about1.jpg";
import img2 from "../../pictures/about2.jpg";
import img3 from "../../pictures/about3.jpg";
import img4 from "../../pictures/about4.jpg";
import img5 from "../../pictures/about5.jpg";
import img6 from "../../pictures/about6.avif";

export const About = () => {
  return (
    <div className="aboutPage">
      {/* <div className="first" id="about1">
        <h1>Lextra Pharmaceuticals</h1>

        <div>
          <p>
            Lextra Pharmaceuticals is professionally managed &amp; fast growing
            Indian pharmaceutical company focused in manufacturing and marketing
            of a wide range of healthcare products. Lextra has adopted newer
            technologies including novel drug delivery system to enhance dose
            adherence and patient compliance. The company reaches out to 2000
            chemists and serves 3000 doctors covering major specialities. Lextra
            Pharmaceuticals is professionally managed and fast growing Indian
            pharmaceutical company focused in manufacturing and marketing of a
            wide range of healthcare products.
          </p>
          <img src={img1} alt="aboutUs" />
        </div>
      </div>
      <div className="second" id="about2">
        <h1>Why us?</h1>
        <div>
          <img src={img2} alt="aboutUs" />
          <p>
            Lextra Pharmaceuticals has successfully broken the clutter and have
            made a mark of it's own in the medical domain and this has been
            possible owing to the long experience and extensive knowledge of the
            industry, a series of innovative products and following a
            customer-centeric approach. We firmly believe that total quality
            maintenance is possible only when there is complete product delivery
            system and not just quality manufacturing. Thus we extend full
            support to our clients in rendering world class logistic services.
            We have tie ups with renowned international logistic companies like,
            DHL, UPS and FEDEX for on time deliveries.
          </p>
        </div>
      </div>
      <div className="third" id="about3">
        <h1>Quality</h1>
        <div>
          <p>
            Our products are manufactured in state of art manufacturing facility
            based at HP and Punjab . We are research driven pharmaceutical
            company adhering to WHO-GMP norms ensuring best quality and
            affordability. This “quality” is a mission being complemented by various departments like materials, production, engineering, stores, medical, marketing, quality control and quality assurance. It is monitored by a team responsible for validation,
            GMP documentation, self–audits, training and market complaints. The
            ultimate “quality” goal is achieved by – everyone adhering to
            quality policy and principles.
          </p>
          <img src={img3} alt="aboutUs" />
        </div>
      </div>
      <div className="fourth">
        <div>
          <img src={img3} alt="aboutUs" />

          <p>
            Lextra Pharmaceuticals is professionally managed &amp; fast growing
            Indian pharmaceutical company focused in manufacturing and marketing
            of a wide range of healthcare products. The company's operations
            ranges from API to formulations, generics and healthcare products.
            Lextra has adopted newer technologies including novel drug delivery
            system to enhance dose adherence and patient compliance.
          </p>
        </div>
      </div> */}

      <div>
        <h1>Lextra Pharmaceuticals</h1>
        <p>
          Lextra Pharmaceuticals is professionally managed and fast growing
          Indian pharmaceutical company focused in manufacturing and marketing
          of a wide range of healthcare products.
        </p>
      </div>
      <div className="para2">
        <div className="images">
          <div>
            <img src={img1} alt="aboutUs" />
            <img src={img2} alt="aboutUs" />
          </div>
          <div>
            <img src={img3} alt="aboutUs" />
            <img src={img4} alt="aboutUs" />
          </div>
        </div>
        <div className="para2p">
          <p>
            Lextra strategically incorporates cutting-edge drug delivery systems
            to elevate dosage adherence and foster patient compliance. Its
            outreach extends to 2000 pharmacists, facilitating collaboration
            with 3000 doctors spanning crucial medical specialities. By
            embracing innovative technologies, Lextra ensures a dynamic approach
            to healthcare delivery, prioritizing precision and efficiency.
          </p>
        </div>
      </div>
      <div className="para3">
        <h1>Why us?</h1>
        <p>
          Lextra Pharmaceuticals stands out prominently in the medical domain,
          distinguishing itself through a combination of extensive industry
          expertise, a rich history, and a trailblazing range of innovative
          products. Our commitment to a customer-centric approach is unwavering,
            ensuring that every interaction is meaningful and tailored to meet
            unique needs. 
        </p>
      </div>
      <div className="para4">
        <div className="para4p">
          <p>
           Compliance with WHO norms is integral to our
            operations, guaranteeing the highest quality and safety standards.
            Beyond our reputation for excellence, Lextra offers competitive
            prices, making cutting-edge healthcare solutions accessible. Choose
            us for a seamless blend of experience, innovation, and dedication to
            your well-being.
          </p>
        </div>
        <div>
          <img src={img5} alt="aboutUs" />
        </div>
      </div>
      <div className="para5">
        <h1>Seamless Excellence: Elevating Quality Beyond Manufacturing with World-Class Logistics Support</h1>
        <img src={img6} alt="aboutus"/>
        <p>
        We strongly assert that achieving comprehensive quality maintenance hinges on more than just quality manufacturing; it requires a holistic product delivery system. As a testament to this belief, we wholeheartedly assist our clients by providing top-notch logistic services. Our commitment goes beyond crafting high-quality products, as we recognize that a seamless and efficient delivery process is integral to ensuring overall excellence. By offering world-class logistic services, we enhance the entire value chain, solidifying our dedication to delivering unparalleled quality and satisfaction to our clients.
        </p>
      </div>
    </div>
  );
};
