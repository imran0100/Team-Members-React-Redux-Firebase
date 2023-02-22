import React, { useState } from "react";
import "./modal.css";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { addMember } from "../redux/memberAction";

const Modal = (props) => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // auth handler

  useEffect(() => {}, [currentUser]);

  //   console.log(currentUser.email, "currentUser");
  ////
  //   const noOfCakes = useSelector((state) => {
  //     // console.log(state);
  //     const { member } = state;
  //     console.log("redux Store", [...member.allMemebrs]);
  //     return member.noOfCakes;
  //   });
  //   console.log(noOfCakes, "noOfcakes");

  ////
  const [state, setState] = useState({
    id: "xyz",
    name: "Max",
    company: "Delta",
    status: false,
    lastUpdated: "16-23-2001",
    notes: "ManUtd highest scorer",
    noOfCakes: 10,
  });

  // submit handler
  useEffect(() => {}, []);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("clicked submit", state);
    setState(state);
    // setState((prevState) => {
    //   return {
    //     ...prevState,
    //     lastUpdated: new Date(),
    //     id: Math.random().toString(),
    //   };
    // });
    ///// update to redux
    dispatch(addMember(state));
    props.onClick(false);
  };

  const changeHandler = (e) => {
    let d = new Date();
    let { name, value } = e.target;
    // console.log(name, value);
    const date = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
    setState({
      ...state,
      [name]: value,
      id: Math.random().toString(),
      lastUpdated: date,
    });
  };

  const clickHandler = () => {
    props.onClick();
  };

  return (
    <div>
      <div className='modal' onClick={clickHandler}>
        <div className='card' onClick={(e) => e.stopPropagation()}>
          <h2 className='title'>Add Members</h2>
          <div className='form-block-2 '>
            <form
              onSubmit={submitHandler}
              name='email-form-2'
              className='form-2'
            >
              <label htmlFor='name'></label>
              <input
                onChange={changeHandler}
                type='text'
                className='category '
                maxLength={256}
                placeholder='Name'
                name='name'
              />
              <label htmlFor='company'></label>
              <input
                onChange={changeHandler}
                type='text'
                className='api-url '
                maxLength={256}
                placeholder='Company'
                name='company'
              />
              <label htmlFor='status'></label>
              <input
                onChange={changeHandler}
                type='text'
                className='api-url '
                maxLength={256}
                placeholder='Status'
                name='status'
              />
              <label htmlFor='notes'></label>
              <input
                onChange={changeHandler}
                type='text'
                className='api-url '
                maxLength={30}
                placeholder='Notes'
                name='notes'
              />
              <div className='btn-wrap'>
                <input type='submit' className='submit-button-2 one' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
