import React from "react";
import "./Courses.css";
import ai from '../../../assets/img/ai.png'
import sd from '../../../assets/img/sd.png'
import dg from '../../../assets/img/dg.png'
import hacker from '../../../assets/img/hacking.png'

function Courses() {
    const courseData =[
        {
            title:"ai devopement",
            desc :" master ai development",
            img:ai
        },
        {
            title:"digitel marketing",
            desc :" master ai development",
            img:sd
        },
        {
            title:"cyber securty ",
            desc :" master ai development",
            img:dg
        },
        {
            title:"softwaqre",
            desc :" master ai development",
            img:hacker
        },
    ]
  return (
    <div className="container course-container">
      <div className="course-top">
        <h2 className="section_title">Our free course</h2>
        <p>sapasadjh faoi flkpp jfjksdjq wwe io oo w</p>
        <div className="course-wrapper">
            {
                courseData.map((course,index)=>(
                    <div className="course-item" key={index}>
                    <span className="course-icon">
                      <img src={course.img} alt="" srcset="" />
                    </span>
                    <div className="course-content">
                      <h4>{course.title}</h4>
                      <p>{course.desc}</p>
                    </div>
                  </div>
                ))
            }
         
        </div>
      </div>
    </div>
  );
}

export default Courses;
