import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from "../redux/actions";
import { useState } from "react";

import Modal from "../components/Modal";
import "./Home.css";
import Container from "./Container";

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = (state) => {
    setIsOpen(state);
  };

  // auth handler
  const authHandler = (e) => {
    if (currentUser) {
      logoutInitiate()(dispatch);
    }
  };

  const clickHandler = (state) => {
    setIsOpen(state);
  };

  // useEffect(() => {}, [currentUser]);

  // // console.log(currentUser.email, "currentUser");
  // ////
  // const noOfCakes = useSelector((state) => {
  //   // console.log(state);
  //   const { member } = state;
  //   // console.log("redux Store", [...member.allMemebrs]);
  //   return member.noOfCakes;
  // });
  // // console.log(noOfCakes, "noOfcakes");

  ////
  // const [state, setState] = useState({
  //   id: "xyz",
  //   name: "Max",
  //   company: "Delta",
  //   status: false,
  //   lastUpdated: "16-23-2001",
  //   notes: "ManUtd highest scorer",
  //   noOfCakes: 10,
  // });

  // submit handler
  // useEffect(() => {}, []);
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   setState(state);
  //   // setState((prevState) => {
  //   //   return {
  //   //     ...prevState,
  //   //     lastUpdated: new Date(),
  //   //     id: Math.random().toString(),
  //   //   };
  //   // });
  //   ///// update to redux
  //   dispatch(addCake(state));
  // };

  // const changeHandler = (e) => {
  //   let d = new Date();
  //   let { name, value } = e.target;
  //   const date = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
  //   setState({
  //     ...state,
  //     [name]: value,
  //     id: Math.random().toString(),
  //     lastUpdated: date,
  //   });
  // };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginTop: "20px",
          marginRight: "20px",
          cursor: "pointer",
        }}
        onClick={authHandler}
      >
        <div
          className='text-block'
          style={{
            backgroundColor: "red",
            display: "inline-block",
          }}
        >
          Logout
        </div>
      </div>
      <Container onOpen={openHandler}></Container>
      {isOpen && <Modal onClick={clickHandler}></Modal>}
    </>
  );

  // <div>
  //   <h4>{`Hi ${currentUser.email} `}</h4>
  //   <h2>No of cakes </h2>
  /* <form onSubmit={submitHandler}>
        <div>
          <label name='name' htmlFor='name'>
            name
          </label>
          <input type='text' name='name' onChange={changeHandler}></input>
        </div>
        <button type='submit'>submit</button>
      </form> */
  /* <button
        onClick={() => {
          dispatch(buyCake());
        }}
      >
        Buy CAKE
      </button>

      <button onClick={authHandler}>LogOut</button> */

  // </div>
};

export default Home;
