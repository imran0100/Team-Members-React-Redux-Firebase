import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { googleSignInInitiate, loginInitiate } from "../redux/actions";
import glogo from "../assets/images/G.png";
import fblogo from "../assets/images/facebook.png";

const Login = () => {
  const [state, setState] = useState({
    Email: "",
    Password: "",
  });

  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Navigate to home page after register
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    /// dispatching to redux store
    loginInitiate(state.Email, state.Password)(dispatch);
    //clearing fields
    setState((prevState) => {
      return {
        ...prevState,
        Email: "",
        Password: "",
      };
    });
  };

  const changeHandler = (e) => {
    let { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleGoogleSignIn = () => {
    // console.log("google");
    googleSignInInitiate()(dispatch);
  };

  const handleFacebookSignIn = () => {
    console.log("facebook");
  };

  return (
    <>
      <div className='page-wrapper'>
        <div className='page-container _2'>
          <div className='block-2'>
            <div className='form-wrapper'>
              <h2 className='heading-2'>Get Started!</h2>
              <div className='form-box'>
                <h3 className='heading-4'>Use your social profile to login</h3>
                <div className='social-box'>
                  <button
                    className='social-login '
                    onClick={handleGoogleSignIn}
                  >
                    <img src={glogo} alt='' className='image' />
                    <div className='div-block-2'>
                      <div className='text-block-9'>Google</div>
                    </div>
                  </button>
                  <button
                    className='social-login facebook '
                    onClick={handleFacebookSignIn}
                  >
                    <img src={fblogo} alt='' className='image' />
                    <div className='div-block-2'>
                      <div className='text-block-9 _2'>Facebook</div>
                    </div>
                  </button>
                </div>
                <div className='div-block-6-copy'>
                  <div className='_1px-div-line'></div>
                  <h3 className='heading-4'>Or</h3>
                  <div className='_1px-div-line'></div>
                </div>

                <form onSubmit={submitHandler}>
                  <div className='form-field-wrapper'>
                    <div className='text-field-box _2'>
                      <label htmlFor='Email' className='field-label-2'>
                        Email
                      </label>
                      <input
                        type='email'
                        className='text-field-2 w-input'
                        name='Email'
                        placeholder='your@email.com'
                        onChange={changeHandler}
                      />
                    </div>
                    <div className='text-field-box _2'>
                      <label htmlFor='Password' className='field-label-2'>
                        Password
                      </label>
                      <input
                        type='password'
                        className='text-field-2'
                        name='Password'
                        placeholder='Password'
                        onChange={changeHandler}
                      />
                    </div>
                  </div>
                  <input
                    type='submit'
                    value='Log In'
                    className='button registration '
                  />
                </form>
                <div className='div-block-41'>
                  <div className='text-block-8'>
                    Don't have an account yet?{" "}
                  </div>
                  <Link to='/register' className='link-3'>
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
