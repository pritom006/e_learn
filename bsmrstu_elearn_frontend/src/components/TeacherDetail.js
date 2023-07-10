import { Link, useParams } from "react-router-dom";
//import TeacherSidebar from "./TeacherSidebar";
import { useState, useEffect } from "react";
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';
const tokenStr = "6ef756a665d56de13ea00912f1bffe5566af36fb";
function TeacherDetail() {
    let {teacher_id} = useParams();
    const [courseData, setcourseData] = useState([]);
    const [teacherData, setteachreData] = useState([]);

    useEffect(() => {
        try {
            axios.get(baseUrl + '/teacher/'+teacher_id, { headers: { "Authorization": `Token  ${tokenStr}` } })
                .then((response) => {
                    console.log(response);
                    setcourseData(response.data);
                    setteachreData(response.data.teacher_courses);
                });
        } catch (error) {
            console.log(error);
        }
    }, []);
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img
                        src="/teacher.jpg"
                        className="img-fluid rounded float-left"
                        alt="Course Image"
                    />
                </div>
                <div className="col-8">
                    <h3>{teacherData.full_name}</h3>
                    <p>
                        {teacherData.detail}
                    </p>
                    <p className="fw-bold">
                        Skilss: <Link to="/category/python">Python</Link>, <Link to="/category/java">Java</Link>, <Link to="/category/javascript">JavaScript</Link>
                    </p>
                    <p className="fw-bold">Recent Courses: <Link to="/category/python">Python</Link>, </p>
                    <p className="fw-bold">Total Enrolled: 255 Students</p>
                    <p className="fw-bold">Rating: 4.5/5</p>
                </div>
            </div>
            {/* Course Lists*/}
            <div className="card mt-3">
                <h5 className="card-header">
                    Course Lists
                </h5>
                <div className="list-group list-group-flush">
                    <Link to="/detail/1" className="list-group-item list-group-item-action">Python Course</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action">Java Course</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action">JavaScript Course</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action">React-js Course</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action">Django Development</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action">Django Rest Framework</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action">Reddis Course</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action">Docker Course</Link>
                </div>
            </div>
        </div>
    );
}

export default TeacherDetail;