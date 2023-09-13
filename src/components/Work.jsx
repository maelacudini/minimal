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
      <h1 className={style.workTitle}>
        Simplifying web excellence: your brand experience.
      </h1>

      <div className={style.gallery}>
        {images.map((image, index) => (
          <div key={index} className={style.card}>
            <motion.a
              data-bs-toggle="modal"
              data-bs-target={`#modal-${index}`}
              whileHover={{ scale: 1.1 }}
              className="w-100 nav-link"
            >
              <img
                src={image.url}
                alt={image.title}
                className="img-fluid mb-3"
                loading="lazy"
              />
              <h3 className={style.h3desc}>{image.title}</h3>
              <p className={style.pdesc}>{image.description.slice(0, 30)}...</p>
            </motion.a>
            <WorkProjects image={image} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
