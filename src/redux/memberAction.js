import * as types from "./actionTypes";

const deleteMember = (id) => {
  return {
    type: types.DELETE_MEMBER,
    payload: id,
  };
};

export const filterMember = (company) => {
  return {
    type: types.FILTER_MEMBER,
    payload: company,
  };
};

export const addMember = (members) => {
  return {
    type: types.ADD_MEMBER,
    payload: members,
  };
};

export default deleteMember;
