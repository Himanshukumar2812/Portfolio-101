import React from "react";
import './Styles/Section.scss';
import dp2 from './assets/profile-pic.png';

const Section = () => {
    return(
        <div className='section'>

            <div className="section__container">

                <div className="section__img">

                    <img src = {dp2} alt=""/>
                </div>

                <div className="section__content">
                    <h1>Himanshu Kumar</h1>
                    <p>Recent Graduate Software Engineer in Information Technology </p>
                    <p>Proficient in C++ programming </p>
                    <p>Passionate about Web Development</p>
                    <p>JAVA / PYTHON </p>
                    <p>SQL / DBMS</p>
                </div>
            </div>

        </div>
    )
        
}
export default Section

// import React from 'react'
// import './Styles/Section.scss'

// import dp2 from './assets/profile-pic.png'

// const Section = () => {

//     return (

//         <div className='section'>

//             <div className="section__container">

//                 <div className="section__img">

//                     <img src={dp2} alt="" />

//                 </div>

//                 <div className="section__content">

//                     <h1>Himanshu Kumar</h1>

//                     <p>Experience in C++ Programming</p>
                    
//                     <p>JavaScript development</p>

//                     <p>Java </p>

//                     <p>Python</p>

//                     <p>Professional UI and UX Designer</p>

//                 </div>

//             </div>

//         </div>

//     )

// }

// export default Section