import style from "../css/app.module.css";

const approach = [
  {
    description:
      "Our design approach revolves around the beauty of simplicity. We prioritize elegant aesthetics that resonate with your audience, creating visually stunning websites that leave a lasting impression.",
  },
  {
    description:
      "User experience is at the core of our design philosophy. We focus on intuitive navigation and user-friendly interfaces to ensure that your website engages and delights visitors.",
  },
  {
    description:
      "Minimalism doesn't mean sacrificing functionality. We blend form and function seamlessly, delivering websites that not only look great but also perform flawlessly across all platforms.",
  },
  {
    description:
      "I forgot to generate this paragraph, and honestly I'm just way too tired. So imagine you're reading something about having great ideas, creating huge projects and getting super cool reviews.",
  },
  {
    description:
      "We understand that each client is unique. Our approach involves close collaboration to tailor our designs to your brand's specific needs, ensuring a truly personalized online presence.",
  },
  {
    description:
      "Our designs aren't just for today; they're built to adapt to the future. We employ scalable technologies and stay ahead of industry trends to keep your website relevant in a rapidly evolving digital landscape.",
  },
];

const Approach = () => {
  return (
    <div>
      <h3 className={style.sectionTitle}>Approach</h3>
      <div className={style.approachList}>
        {approach.map((app, index) => (
          <div key={index} className={style.approach}>
            <h5>{index}</h5>
            <p>{app.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Approach;
