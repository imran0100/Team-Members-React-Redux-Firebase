import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { registerInitiate } from "../redux/actions";

const Register = () => {
  const [state, setState] = useState({
    Name: "",
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
    registerInitiate(state.Name, state.Email, state.Password)(dispatch);
  };

  const changeHandler = (e) => {
    let { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <>
      <div className='page-wrapper'>
        <div className='page-container _2'>
          <div className='block-2'>
            <div className='form-wrapper'>
              <h2 className='heading-2'>Sign Up Now!</h2>
              <div className='form-box'>
                <form onSubmit={submitHandler}>
                  <div className='form-field-wrapper'>
                    <div className='text-field-box _2'>
                      <label htmlFor='Name' className='field-label-2'>
                        Name
                      </label>
                      <input
                        type='text'
                        className='text-field-2 w-input'
                        name='Name'
                        placeholder='Name'
                        onChange={changeHandler}
                      />
                    </div>
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
                        type='text'
                        className='text-field-2'
                        name='Password'
                        placeholder='Password'
                        onChange={changeHandler}
                      />
                    </div>
                  </div>
                  <input
                    type='submit'
                    value='Register'
                    className='button registration '
                  />
                </form>
                <div className='div-block-41'>
                  <div className='text-block-8'>Already have an account ? </div>
                  <Link to='/login' className='link-3'>
                    Log in
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

export default Register;
