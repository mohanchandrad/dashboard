

const Ragister = () => {


    return (
        <>
            <section>
                <div className="container-fluid h-custom d-flex align-items-center" style={{ minHeight: '100vh' }}>
                    <div className="row d-flex justify-content-center align-items-center w-100 h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid" alt="Sample image" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <h2 className="mb-5">Sign up</h2>
                                </div>

                                <div className="d-flex gap-3">
                                    <div className="col-md-6">
                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example3" className="form-control mb-2 form-control-lg"
                                                placeholder="Enter your Name" />
                                            <label className="form-label" for="form3Example3">User Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-outline mb-4">
                                            <input type="number" id="form3Example3" className="form-control mb-2 form-control-lg"
                                                placeholder="Enter your Contact No" />
                                            <label className="form-label" for="form3Example3">Contact Number</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex gap-3">
                                    <div className="col-md-6">
                                        <div className="form-outline mb-4">
                                            <input type="email" id="form3Example3" className="form-control mb-2 form-control-lg"
                                                placeholder="Enter a valid email address" />
                                            <label className="form-label" for="form3Example3">Email address</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-outline mb-3">
                                            <input type="password" id="form3Example4" className="form-control mb-2 form-control-lg"
                                                placeholder="Enter password" />
                                            <label className="form-label" for="form3Example4">Password</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="text" id="form3Example4" className="form-control mb-2 form-control-lg"
                                        placeholder="Job Profile" />
                                    <label className="form-label" for="form3Example4">Job Roll</label>
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="file" id="form3Example4" className="form-control mb-2 form-control-lg"
                                        placeholder="Enter password" />
                                    <label className="form-label" for="form3Example4">Password</label>
                                </div>




                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" for="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" className="text-body">Forgot password?</a>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" className="btn btn-primary btn-lg"
                                        style={{ paddingLeft: ' 2.5rem', paddingRight: ' 2.5rem' }}>Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                        className="link-danger">Register</a></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ragister