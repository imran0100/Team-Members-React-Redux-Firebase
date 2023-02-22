import * as types from "./actionTypes";

const initialState = {
  allMemebrs: [
    {
      id: "1",
      name: "Wayne Rooney",
      company: "DC United",
      status: true,
      lastUpdated: "07-07-2017",
      notes: "ManUtd highest scorer",
    },
    {
      id: "2",
      name: "Ryan Giggs",
      company: "Manchester United",
      status: false,
      lastUpdated: "03-03-2011",
      notes: "Most matches played",
    },
    {
      id: "3",
      name: "Jlatan ",
      company: "Delta exchange",
      status: true,
      lastUpdated: "03-03-2014",
      notes: "From phoreka",
    },
  ],
};

// case ADD_ITEM :
//     return {
//         ...state,
//         arr: [...state.arr, action.newItem]
//     }

const memberReducer = (state = initialState, action) => {
  //   console.log("action from", action);
  switch (action.type) {
    case types.DELETE_MEMBER:
      return {
        ...state,
        allMemebrs: [...state.allMemebrs].filter((member) => {
          return member.id !== action.payload;
        }),
      };
    case types.FILTER_MEMBER:
      return {
        ...state,
        allMemebrs: [...state.allMemebrs].filter((member) => {
          return member.company === action.payload;
        }),
      };
    case types.ADD_MEMBER:
      return {
        ...state,
        allMemebrs: [...state.allMemebrs, action.payload],
      };
    default:
      return state;
  }
};
export default memberReducer;
