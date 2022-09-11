import { act } from "react-dom/test-utils";
import {
  CHANGE_ATTRIB,
  CHANGE_PAGINA,
  GET_ALL_PERSONS,
  GET_PERSON_BY_ATRIB,
  GET_PERSON_BY_LIMIT,
  RESET_ULT_DOC,
} from "../actions/types";

const initialState = {
  personas: [],
  personas_table: [],
  attribFilter: "nombre",
  ult_doc: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PERSONS:
      return {
        ...state,
        personas: action.payload,
        personas_table: action.payload,
        ult_doc: action.ultimo,
      };
    case GET_PERSON_BY_LIMIT:
      return {
        ...state,
        personas: [...state.personas, ...action.payload],
        ult_doc: action.ultimo,
      };
    case RESET_ULT_DOC:
      return {
        ...state,
        ult_doc: null,
      };
    case GET_PERSON_BY_ATRIB:
      return {
        ...state,
        personas: action.payload,
      };
    case CHANGE_ATTRIB:
      return {
        ...state,
        attribFilter: action.payload,
      };
    case CHANGE_PAGINA:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
