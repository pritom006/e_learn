import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';
const tokenStr = "6ef756a665d56de13ea00912f1bffe5566af36fb";
function AllCourses() {
    const [courseData, setCourseData] = useState([]);

    // fetch courses when the page will be loaded
    useEffect(() => {
        try {
            axios.get(baseUrl + '/course/', { headers: { "Authorization": `Token  ${tokenStr}` } })
                .then((response) => {
                    // console.log(response.data);
                    setCourseData(response.data);
                });
        } catch (error) {
            console.log(error);
        }
    }, []);
    return (
        <div className="container mt-3">
            <h3 className="pb-1 mb-4">
                All Latest Courses
            </h3>
            <div className="row mb-4">
                {courseData && courseData.map((course,index)=>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to={'/detail/${course.id}'}>
                            <img src={course.featured_img} className="card-img-top rounded mx-auto d-block" alt={course.title} />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to={'/detail/${course.id}'}>{course.title}</Link>
                            </h5>
                        </div>
                    </div>
                </div>
                )}
            </div>

            {/* End Latest Courses */}
            {/* pagination start */}
            <nav aria-label="Page navigation example mt-5">
                <ul class="pagination justify-content-center">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
            {/* End pagination */}
        </div>
    );
}

export default AllCourses;