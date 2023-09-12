import style from "../css/app.module.css";
import Approach from "./Approach";
import Clients from "./Clients";
import Skills from "./Skills";

const About = () => {
  return (
    <div id="about">
      <h3 className={style.sectionTitle}>About</h3>
      <div className={`row ${style.rowAbout}`}>
        <div className="col-md-4 d-flex justify-content-center">
          <img
            className={style.me}
            src="https://images.unsplash.com/photo-1687360441042-a3eb360f3db1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt="me"
          />
        </div>
        <div className="col-md-8">
          <p className={style.descMe}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vel
            earum deleniti harum? Quam eveniet, nesciunt debitis iste
            repudiandae obcaecati sint, illum accusantium quibusdam animi culpa
            non accusamus aliquid atque. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Hic in delectus libero dolor omnis reprehenderit
            ea aut iure consequatur! Nisi explicabo consequatur, ullam eum illo
            ipsum aliquid non tempora incidunt!
          </p>
        </div>
      </div>

      <Skills />
      <Approach />
      <Clients />
      <hr />
    </div>
  );
};

export default About;
