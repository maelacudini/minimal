import style from "../css/app.module.css";

const WorkProjects = ({ image, index }) => {
  return (
    <div
      className="modal fade"
      id={`modal-${index}`}
      tabIndex="-1"
      aria-labelledby={`#modal-${index}`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className={`modal-content ${style.modalContent}`}>
          <div className="modal-header">
            <h1 className="modal-title fs-5" id={`#modal-${index}`}>
              {image.title}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <img src={image.url} alt="project" width={"100%"} height={"auto"} />
            <p className="mt-2 mb-4 text-black">{image.description}</p>

            {image.tags.map((tag, index) => (
              <div className={style.tag} key={index}>
                <p>{tag}</p>
              </div>
            ))}

            <div className="d-flex justify-content-between align-items-center mt-4">
              <h5>
                <b>DATE:</b>
              </h5>
              <h5>{image.date}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProjects;
