import style from "../css/app.module.css";
import img5 from "/d5.png";

const Contact = () => {
  return (
    <div id="contact" className={style.contact}>
      <h3 className={style.sectionTitle}>Contact</h3>
      <div className={style.cardContact}>
        <div>
          <h2 className="mb-5">Need a design partner?</h2>
          <p className={style.bottomCardContact}>
            Shoot us a note with your project details at minimalwork@gmail.com,
            we'll be happy to support your ideas.
          </p>
        </div>
        <div className={style.socials}>
          <a href="#" className="nav-link">
            <i className={`bi bi-instagram ${style.icon}`} />
          </a>
          <a href="#" className="nav-link">
            <i className={`bi bi-facebook ${style.icon}`} />
          </a>
          <a href="#" className="nav-link">
            <i className={`bi bi-linkedin ${style.icon}`} />
          </a>
          <a href="#" className="nav-link">
            <i className={`bi bi-github ${style.icon}`} />
          </a>
          <a href="#" className="nav-link">
            <i className={`bi bi-envelope ${style.icon}`} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
