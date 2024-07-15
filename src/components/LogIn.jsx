import './LogInStyles.css'

const LogIn = () => {
  return (
    <>
        <div className="form-container">
            <h1>Log in my account</h1>
            <form>
                <input type="email" placeholder='Your Email' />
                <input type="password" placeholder='Password' />
                <input type="password" placeholder='Repeat your password' />
                <button>Log In</button>
            </form>
        </div>
    </>
  )
}

export default LogIn