import style from "../css/app.module.css";
import img1 from "/d1.png";
import img2 from "/d2.png";
import img3 from "/d3.png";
import { motion } from "framer-motion";
import WorkProjects from "./WorkProject";

const images = [
  {
    url: img1,
    title: "Minimalistic Redesign",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit excepturi illo ad? Voluptate, rem culpa. Error est at vero soluta eligendi ducimus voluptatibus quaerat nulla repudiandae repellat atque, provident ullam.",
    tags: ["Minimal", "Brutalism", "White Space"],
    date: "2023",
  },
  {
    url: img2,
    title: "Minimal Way",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit excepturi illo ad? Voluptate, rem culpa. Error est at vero soluta eligendi ducimus voluptatibus quaerat nulla repudiandae repellat atque, provident ullam.",
    tags: ["Minimal", "Brutalism", "White Space"],
    date: "2023",
  },
  {
    url: img3,
    title: "Winning Combination",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit excepturi illo ad? Voluptate, rem culpa. Error est at vero soluta eligendi ducimus voluptatibus quaerat nulla repudiandae repellat atque, provident ullam.",
    tags: ["Minimal", "Brutalism", "White Space"],
    date: "2023",
  },
  {
    url: img1,
    title: "Your Brand",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit excepturi illo ad? Voluptate, rem culpa. Error est at vero soluta eligendi ducimus voluptatibus quaerat nulla repudiandae repellat atque, provident ullam.",
    tags: ["Minimal", "Brutalism", "White Space"],
    date: "2023",
  },
  {
    url: img2,
    title: "Timeless Minimalism",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit excepturi illo ad? Voluptate, rem culpa. Error est at vero soluta eligendi ducimus voluptatibus quaerat nulla repudiandae repellat atque, provident ullam.",
    tags: ["Minimal", "Brutalism", "White Space"],
    date: "2023",
  },
  {
    url: img3,
    title: "Growing New Ideas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit excepturi illo ad? Voluptate, rem culpa. Error est at vero soluta eligendi ducimus voluptatibus quaerat nulla repudiandae repellat atque, provident ullam.",
    tags: ["Minimal", "Brutalism", "White Space"],
    date: "2023",
  },
];

const Work = () => {
  return (
    <div id="work">
      <div className={style.workTitle}>
        <h1>Simplifying web excellence: your brand experience.</h1>
      </div>

      <article id="projects">
        <h3 className={style.sectionTitle}>Our Projects</h3>
        <div className={style.gallery}>
          {images.map((image, index) => (
            <div key={index} className={style.card}>
              <a
                data-bs-toggle="modal"
                data-bs-target={`#modal-${index}`}
                className={`nav-link ${style.cardlink}`}
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={image.url}
                  alt={image.title}
                  className="img-fluid"
                  loading="lazy"
                />
                <div className={style.descCard}>
                  <h3>{image.title}</h3>
                  <p>{image.description.slice(0, 30)}...</p>
                </div>
              </a>
              <WorkProjects image={image} index={index} />
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default Work;
