import { Link } from "react-router-dom";
function CategoryCourses() {
    return (
        <div className="container mt-3">
            <h3 className="pb-1 mb-4">
                Data Science Courses
            </h3>
            <div className="row">
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <Link to="/detail/1">
                            <img src="/python.png" className="card-img-top rounded mx-auto d-block" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/detail/1">Course title</Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href="#">
                            <img src="/python.png" className="card-img-top rounded mx-auto d-block" alt="..." />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">
                                <a href="#">Course title</a>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href="#">
                            <img src="/python.png" className="card-img-top rounded mx-auto d-block" alt="..." />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">
                                <a href="#">Course title</a>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href="#">
                            <img src="/python.png" className="card-img-top rounded mx-auto d-block" alt="..." />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">
                                <a href="#">Course title</a>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href="#">
                            <img src="/python.png" className="card-img-top rounded mx-auto d-block" alt="..." />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">
                                <a href="#">Course title</a>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href="#">
                            <img src="/python.png" className="card-img-top rounded mx-auto d-block" alt="..." />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">
                                <a href="#">Course title</a>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href="#">
                            <img src="/python.png" className="card-img-top rounded mx-auto d-block" alt="..." />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">
                                <a href="#">Course title</a>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card">
                        <a href="#">
                            <img src="/python.png" className="card-img-top rounded mx-auto d-block" alt="..." />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">
                                <a href="#">Course title</a>
                            </h5>
                        </div>
                    </div>
                </div>
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

export default CategoryCourses;