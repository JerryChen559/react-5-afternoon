const initialState = {
  loanType: "Home Purchase",
  propertyType: "Single Family Home",
  city: "",
  propToBeUsedOn: "",
  found: "false",
  realEstateAgent: "false",
  cost: 0,
  downPayment: 0,
  credit: "",
  history: "",
  addressOne: "",
  addressTwo: "",
  addressThree: "",
  firstName: "",
  lastName: "",
  email: ""
};

const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = "UPDATE_PROPERTY_TYPE";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_PROP = "UPDATE_PROP";
const UPDATE_FOUND = "UPDATE_FOUND";
const UPDATE_REALESTATEAGENT = "UPDATE_REALESTATEAGENT";
const UPDATE_COST = "UPDATE_COST";
const UPDATE_DOWNPAYMENT = "UPDATE_DOWNPAYMENT";
const UPDATE_CREDIT = "UPDATE_CREDIT";
const UPDATE_HISTORY = "UPDATE_HISTORY";
const UPDATE_ADDRESSONE = "UPDATE_ADDRESSONE";
const UPDATE_ADDRESSTWO = "UPDATE_ADDRESSTWO";
const UPDATE_ADDRESSTHREE = "UPDATE_ADDRESSTHREE";
const UPDATE_FIRSTNAME = "UPDATE_FIRSTNAME";
const UPDATE_LASTNAME = "UPDATE_LASTNAME";
const UPDATE_EMAIL = "UPDATE_EMAIL";

function reducer(state = initialState, action) {
  console.log("REDUCER HIT: Action ->", action);

  switch (action.type) {
    case UPDATE_LOAN_TYPE:
      return { ...state, loanType: action.payload };
    case UPDATE_PROPERTY_TYPE:
      return { ...state, propertyType: action.payload };
    case UPDATE_CITY:
      return { ...state, city: action.payload };
    case UPDATE_PROP:
      return { ...state, propToBeUsedOn: action.payload };
    case UPDATE_FOUND:
      return { ...state, found: action.payload };
    case UPDATE_REALESTATEAGENT:
      return { ...state, realEstateAgent: action.payload };
    case UPDATE_COST:
      return { ...state, cost: action.payload };
    case UPDATE_DOWNPAYMENT:
      return { ...state, downPayment: action.payload };
    case UPDATE_CREDIT:
      return { ...state, credit: action.payload };
    case UPDATE_HISTORY:
      return { ...state, history: action.payload };
    case UPDATE_ADDRESSONE:
      return { ...state, addressOne: action.payload };
    case UPDATE_ADDRESSTWO:
      return { ...state, addressTwo: action.payload };
    case UPDATE_ADDRESSTHREE:
      return { ...state, addressThree: action.payload };
    case UPDATE_FIRSTNAME:
      return { ...state, firstName: action.payload };
    case UPDATE_LASTNAME:
      return { ...state, lastName: action.payload };
    case UPDATE_EMAIL:
      return { ...state, email: action.payload };
    default:
      return state;
  }
}

export function updateLoanType(loanType) {
  return {
    type: UPDATE_LOAN_TYPE,
    payload: loanType
  };
}
export function updatePropertyType(property) {
  return {
    type: UPDATE_PROPERTY_TYPE,
    payload: property
  };
}
export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  };
}
export function updateProp(propToBeUsedOn) {
  return {
    type: UPDATE_PROP,
    payload: propToBeUsedOn
  };
}
export function updateFound(found) {
  return {
    type: UPDATE_FOUND,
    payload: found
  };
}
export function updateRealEstateAgent(realEstateAgent) {
  return {
    type: UPDATE_REALESTATEAGENT,
    payload: realEstateAgent
  };
}
export function updateCost(cost) {
  return {
    type: UPDATE_COST,
    payload: cost
  };
}
export function updateDownPayment(downPayment) {
  return {
    type: UPDATE_DOWNPAYMENT,
    payload: downPayment
  };
}
export function updateCredit(credit) {
  return {
    type: UPDATE_CREDIT,
    payload: credit
  };
}
export function updateHistory(history) {
  return {
    type: UPDATE_HISTORY,
    payload: history
  };
}
export function updateAddLineOne(addressOne) {
  return {
    type: UPDATE_ADDRESSONE,
    payload: addressOne
  };
}
export function updateAddLineTwo(addressTwo) {
  return {
    type: UPDATE_ADDRESSTWO,
    payload: addressTwo
  };
}
export function updateAddLineThree(addressThree) {
  return {
    type: UPDATE_ADDRESSTHREE,
    payload: addressThree
  };
}
export function updateFirstName(firstName) {
  return {
    type: UPDATE_FIRSTNAME,
    payload: firstName
  };
}
export function updateLastName(lastName) {
  return {
    type: UPDATE_LASTNAME,
    payload: lastName
  };
}
export function updateEmail(email) {
  return {
    type: UPDATE_EMAIL,
    payload: email
  };
}

export default reducer;
