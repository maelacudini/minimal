import style from "../css/app.module.css";

const Contact = () => {
  return (
    <div id="contact">
      <h3 className={style.sectionTitle}>Contact</h3>
      <div className={`row ${style.rowcontact}`}>
        <div className={`col-md-8 ${style.cardContact}`}>
          <h2>Need a design partner?</h2>
          <p className={style.bottomCardContact}>
            Shoot us a note with your project details at minimalwork@gmail.com,
            we'll be happy to support your ideas.
          </p>
        </div>
        <div className={`col-md-4 ${style.colSocial}`}>
          <div className={style.socials}>
            <a href="#" className="nav-link">
              <i className={`bi bi-instagram ${style.icon}`} /> INSTAGRAM
            </a>
            <a href="#" className="nav-link">
              <i className={`bi bi-facebook ${style.icon}`} /> FACEBOOK
            </a>
            <a href="#" className="nav-link">
              <i className={`bi bi-linkedin ${style.icon}`} /> LINKEDIN
            </a>
            <a href="#" className="nav-link">
              <i className={`bi bi-github ${style.icon}`} /> GITHUB
            </a>
            <a href="#" className="nav-link">
              <i className={`bi bi-envelope ${style.icon}`} /> ENVELOPE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
