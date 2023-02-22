import React from "react";
import cross from "../assets/images/close-2.svg";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import deleteMember from "../redux/memberAction";

const Table = (props) => {
  const elRef = useRef();
  const dispatch = useDispatch();

  const findIDHandler = () => {
    // got the id
    const { current } = elRef;
    console.log(current.id, "ref");
    return current.id;
  };
  const deleteMemberHandler = (e) => {
    e.stopPropagation();
    findIDHandler();
    const curID = findIDHandler();
    ////dispatch id
    dispatch(deleteMember(curID));
  };
  return (
    <>
      <div
        className={`table-row ${props.status ? "color" : ""}`}
        id={props.id}
        onClick={findIDHandler}
        ref={elRef}
      >
        <div className='div-block-406 _2'>
          <div className='form-block w-form'>
            <form
              id='email-form'
              name='email-form'
              data-name='Email Form'
              method='get'
            >
              <label className='w-checkbox checkbox-field'>
                <input
                  type='checkbox'
                  id='checkbox'
                  name='checkbox'
                  data-name='Checkbox'
                  className='w-checkbox-input'
                />
                <span
                  className='checkbox-label w-form-label'
                  htmlFor='checkbox'
                ></span>
              </label>
            </form>
          </div>
        </div>
        <div className='table-box _2'>
          <div className='table-data name'>{props.name}</div>
        </div>
        <div className='table-box _2'>
          <div className='table-data link'>{props.company}</div>
        </div>
        <div className='table-box _2'>
          <div className='table-data'>{props.notes}</div>
        </div>
        <div className='table-box _2 small'>
          <div className='table-data'>{props.lastUpdated}</div>
        </div>
        <div className='table-box _2 action'>
          <div
            data-ix='toggle'
            data-w-id='ae27a065-dfeb-a9cb-56ca-8b63a99081b9'
            className='togglebutton active w-inline-block'
          >
            <div>{props.status ? "Active" : "Closed"}</div>
          </div>
        </div>
        <div
          className='table-box _2 action'
          style={{ cursor: "pointer" }}
          onClick={deleteMemberHandler}
        >
          <div
            data-w-id='ae27a065-dfeb-a9cb-56ca-8b63a99081be'
            className='link-block-10 w-inline-block'
          >
            <img src={cross} alt='' className='table-action-icon-2 x' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
