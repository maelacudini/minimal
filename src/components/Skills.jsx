import style from "../css/app.module.css";

const Skills = () => {
  return (
    <div className={style.skills}>
      <div className="row">
        <div className="col-sm-2">
          <h3 className={style.sectionTitle}>Skills</h3>
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-9">
          <div className={style.skillcontainer}>
            <p className={style.skill}>React</p>
            <p className={style.skill}>Angular</p>
            <p className={style.skill}>JavaScript</p>
            <p className={style.skill}>Phyton</p>
            <p className={style.skill}>UI / UX Design</p>
            <p className={style.skill}>Framer Motion</p>
            <p className={style.skill}>Product Design</p>
            <p className={style.skill}>Branding</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
