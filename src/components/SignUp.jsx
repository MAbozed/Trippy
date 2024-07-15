import { Link } from 'react-router-dom'
import Log from '../routes/Log'
import  './SignUpStyles.css'

const SignUp = () => {
  return (
    <>
        <div className="form-container">
                <h1>Create an account</h1>
                <form>
                    <input type="text" placeholder='Your Name' />
                    <input type="email" placeholder='Your Email' />
                    <input type="password" placeholder='Password' />
                    <input type="password" placeholder='Repeat your password' />
                    <button>Register</button>
                    <p className="have-account">Have already an account? 
                        <Link to='/login' className="have-account-link">
                            <u> Login here</u>
                        </Link>
                    </p>
                </form>
            </div>
    </>



  )
}
// style="border-radius: 15px;"
// style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');"
export default SignUp


{/* <div className="form-check d-flex justify-content-center mb-5">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                            <label className="form-check-label" for="form2Example3g">
                                I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                            </label>
                            </div> */}

                            // <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                            //     className="fw-bold text-body"><u>Login here</u></a></p>


        //                     <section className="bg-image sign-container">
        //     <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        //         <div className="container h-100">
        //         <div className="row d-flex justify-content-center align-items-center h-100">
        //             <div className="col-12 col-md-9 col-lg-7 col-xl-6">
        //             <div className="card">
        //                 <div className="card-body p-5">
        //                 <h2 className="text-uppercase text-center mb-5 sign-heading">Create an account</h2>

        //                 <form>

        //                     <div className="form-outline mb-4">
        //                     <input type="text" id="form3Example1cg" className="form-control form-control-lg" placeholder='Your Name' />
        //                     </div>

        //                     <div className="form-outline mb-4">
        //                     <input type="email" id="form3Example3cg" className="form-control form-control-lg" placeholder='Your Email' />
        //                     </div>

        //                     <div className="form-outline mb-4">
        //                     <input type="password" id="form3Example4cg" className="form-control form-control-lg" placeholder='Password'/>
        //                     </div>

        //                     <div className="form-outline mb-4">
        //                     <input type="password" id="form3Example4cdg" className="form-control form-control-lg" placeholder='Repeat your password'/>
        //                     </div>

                            

        //                     <div className="d-flex justify-content-center">
        //                     <button type="button" className='reg-btn'>Register</button>
        //                     </div>

                            

        //                 </form>

        //                 </div>
        //             </div>
        //             </div>
        //         </div>
        //         </div>
        //     </div>
        // </section>