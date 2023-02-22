import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import Table from "./Table";
const Container = (props) => {
  const { currentUser } = useSelector((state) => state.user);
  const [select, setSelect] = useState("DC United");
  const dispatch = useDispatch(select);

  console.log("curentuser", currentUser.email);
  //Bug Here
  const displayName = !currentUser.multiFactor.user.providerData[0].displayName
    ? currentUser.email
    : currentUser.multiFactor.user.providerData[0].displayName;

  //   console.log(props);
  const addClickHandler = () => {
    props.onOpen(true);
  };

  const noOfmembers = useSelector((state) => {
    console.log("from container", state);
    const { member } = state;
    console.log("redux Store", [...member.allMemebrs]);
    return [...member.allMemebrs];
  });
  console.log(noOfmembers, "from COntainer");

  const selectHandler = (e) => {
    setSelect(e.target.value);
    console.log("select:", select);
    /// dispatch
    dispatch(select);
  };

  return (
    <>
      <div className='wrapper-section wf-section'>
        <div className='div-1'>
          <h1 className='heading-3'>{`Hi, ${
            displayName ? displayName : "User"
          }`}</h1>
          <div className='text-block-2'>Welcome to TEAM MEMBER</div>
        </div>
        <div className='div-block-416'>
          <div className='form-block-2 w-form'>
            <select
              id='field'
              name='field'
              data-name='Field'
              onChange={selectHandler}
              value={select}
            >
              <option value='DC United'>Select All</option>
              {noOfmembers &&
                noOfmembers.map((member) => {
                  return (
                    <option
                      key={Math.random().toString()}
                      value={member.company}
                    >
                      {member.company}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className='btn'>
            <div className='text-block' onClick={addClickHandler}>
              Add Members +
            </div>
          </div>
        </div>
        <div className='div-block-415'></div>
        <div className='table-wrapper'>
          <div className='table-row head'>
            <div className='div-block-406'></div>
            <div className='table-box'>
              <div className='table-heading'>Name</div>
            </div>
            <div className='table-box'>
              <div className='table-heading'>Company</div>
            </div>
            <div className='table-box'>
              <div className='table-heading'>Notes</div>
            </div>
            <div className='table-box _11'>
              <div className='table-heading'>Last update</div>
            </div>
            <div className='table-box action'>
              <div className='table-heading'>Status</div>
            </div>
            <div className='table-box action'>
              <div className='table-heading'>Action</div>
            </div>
          </div>
          <div className='table-container'>
            <div className='table-data-wrapper'>
              <div className='scroll-container'>
                <div className='scroll-table-content'></div>
                {noOfmembers.map((member) => {
                  return (
                    <Table
                      key={member.id}
                      id={member.id}
                      name={member.name}
                      company={member.company}
                      notes={member.notes}
                      status={member.status}
                      lastUpdated={member.lastUpdated}
                    ></Table>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
