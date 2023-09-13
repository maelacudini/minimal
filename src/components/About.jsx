import style from "../css/app.module.css";
import Approach from "./Approach";
import Clients from "./Clients";
import Skills from "./Skills";

const About = () => {
  return (
    <div id="about">
      <div className={`row ${style.rowAbout}`}>
        <h3 className={style.sectionTitle}>About us: our team</h3>
        <div className="col-md-4 d-flex justify-content-center">
          <img
            className={style.me}
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="me"
          />
        </div>
        <div className="col-md-8 position-relative">
          <p className={style.descMe}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vel
            earum deleniti harum? Quam eveniet, nesciunt debitis iste
            repudiandae obcaecati sint, illum accusantium quibusdam animi culpa
            non accusamus aliquid atque.
          </p>
          <p className={style.descSmall}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, a
            eaque illum, rem fugiat amet consequuntur explicabo quidem dicta
            tempore voluptatibus rerum illo. Nihil ab itaque alias dolorum, sit
            soluta!
          </p>
        </div>
      </div>

      <Skills />
      <Approach />
      <Clients />
    </div>
  );
};

export default About;
