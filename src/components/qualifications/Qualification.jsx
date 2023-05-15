import React from "react";
import { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const[toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
    <section className="qualifications section">
      <h2 className="section_title">Qualifications</h2>
      <span className="section_subtitle">My Personal Journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div className={toggleState === 1 ? "qualification_button qualificaton_active button--flex" : "qualification_button button--flex"} onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualifcation_icon"></i>
            Education
          </div>

          <div className={toggleState === 2 ? "qualification_button qualificaton_active button--flex" : "qualification_button button--flex"}  onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualifcation_icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"}>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Design</h3>
                <span className="qulaififcation_subtitle">Xyz institiute.</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>
              
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
            <div></div>

            <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Art Director</h3>
                <span className="qulaififcation_subtitle">Abc Institute.</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2022 - 2021
                </div>
              </div>

            </div>


            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Design</h3>
                <span className="qulaififcation_subtitle">pkc institiute.</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>
              
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
            </div>
            
            <div className={toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"}>
            <div className="qualification_data">
            <div></div>

            <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Art Director</h3>
                <span className="qulaififcation_subtitle">Acc Institute.</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2022 - 2021
                </div>
              </div>

            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Design</h3>
                <span className="qulaififcation_subtitle">Poa institiute.</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>
              
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
            <div></div>

            <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Art Director</h3>
                <span className="qulaififcation_subtitle">121 Institute.</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2022 - 2021
                </div>
              </div>

            </div>
            </div>
          </div>
      
      </div>
    </section>
  );
};

export default Qualification;
