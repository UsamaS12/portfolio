import React from 'react'

const info = () => {
  return (
    <div className="about_info grid">
        <div className="about_box">
        <i className='bx bx-award about_icon'></i>
            <h3 className="about_title">Experience</h3>
            <span className="about_subtitle">8 years Working</span>
        </div>

        <div className="about_box">
        <i className='bx bx-briefcase-alt about_icon'></i>
            <h3 className="about_title">Completed</h3>
            <span className="about_subtitle">48+ React Projects</span>
        </div>

        <div className="about_box">
        <i className='bx bx-support about_icon'></i>
            <h3 className="about_title">Support</h3>
            <span className="about_subtitle">10 Hours</span>
        </div>
    </div>
  )
}

export default info