import Experience from '../CoursesExperienceComponents/Experience';
import Courses from '../CoursesExperienceComponents/Courses';
import Mentor from '../StatsMentorsComponent/Mentors';
import StatsBlock from '../StatsMentorsComponent/StatsBlock';
import './HomePageStyles.css';

const HomePage = () => {

    return (
        <div className="homepage-container">
            <div className="homepage-upper-container">
                <h2 className="homepage-title">Welcome back, Harshita !</h2>
                <p className="homepage-question">what's it going to be today?</p>
            </div>
            <div className="homepage-lower-container">
                <div className="left-side">
                    <Experience />
                    <Courses />
                </div>
                <div className="right-side"> 
                    <StatsBlock/>
                    <Mentor />

                </div>
            </div>
        </div>
    );
}

export default HomePage;