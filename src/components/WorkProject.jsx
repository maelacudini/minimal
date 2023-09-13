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
      <div className={`modal-dialog ${style.modaldialog}`}>
        <div className={`modal-content ${style.modalContent}`}>
          <div className="modal-header">
            <h1 className="modal-title fs-5" id={`#modal-${index}`}>
              <b>{image.title}</b>
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

            <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
              <h5>
                <b>DATE:</b>
              </h5>
              <h5>{image.date}</h5>
            </div>

            <p className="text-black mt-4 mb-4">{image.description}</p>

            <div className={style.tags}>
              {image.tags.map((tag, index) => (
                <div className={style.tag} key={index}>
                  <p>{tag}</p>
                  <p>{index}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProjects;
