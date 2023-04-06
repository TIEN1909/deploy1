import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import "./Qualification.css";

const Qualification: React.FC = () => {
  const [toggleModal, setToggleModal] = useState<number>(1);
  const toggleTab = (index: number): void => {
    setToggleModal(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <Slide direction="left" triggerOnce>
        <h2 className="section__title">Qualification</h2>
      </Slide>
      <Slide direction="right" triggerOnce>
        <span className="section__subtitle">My personal journey</span>
      </Slide>
      <div className="qualification__container container">
        {/* START BUTTON */}
        <div className="qualification__tabs">
          <div
            className={
              toggleModal === 1
                ? "qualification__button  qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleModal === 2
                ? "qualification__button  qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        {/* END BUTTON */}

        {/* Content 1 */}
        <Slide direction="left" triggerOnce>
          <div className="qualification__sections">
            <div
              className={
                toggleModal === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              {/* GRP 1 */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualififaction__title">
                    University of Technology and Education - University of
                    Danang
                  </h3>
                  <span className="qualification__subtitle">
                    09/2019 – Present
                  </span>
                </div>
                <div>
                  <span className="qualifaction__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>
          </div>
          {/* Content 2 */}
          <div className="qualification__sections">
            <div
              className={
                toggleModal === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              {/* GRP 5 */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualififaction__title">
                    Safehorizons Software Service One Member Co., Ltd
                  </h3>
                  <span className="qualification__subtitle">
                    Front-end Developer(Internship)
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender"></i>
                    11/2022 – 01/2023
                  </div>
                </div>
                <div>
                  <span className="qualifaction__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              {/* GRP 6 */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualifaction__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualififaction__title">
                    Team member, Project Book-store website
                  </h3>
                  <span className="qualification__subtitle">
                    - Build UI for website by React js/ Redux, Html, Css,
                    Tailwind, Axios <br />
                    - Solution architect.
                    <br />
                    <span>- Link github: GitHub -TIEN1909/book-store</span>
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender"></i>
                    (09/2022 - 10/2022)
                  </div>
                </div>
              </div>
              {/* GRP 7 */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualififaction__title">
                    {" "}
                    Myself, Project movie website
                  </h3>
                  <span className="qualification__subtitle">
                    - Build UI for website by Next js, Next-auth, Tailwind,
                    Html, Css, Formik, Axios <br />
                    - Solution architect <br />- Link github: GitHub -
                    TIEN1909/watch-me
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calender"></i>
                    2022 - present
                  </div>
                </div>
                <div>
                  <span className="qualifaction__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default Qualification;
