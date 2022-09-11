import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
  where,
} from "firebase/firestore";
import { db } from "../../firebaseConfig/firebase";
import {
  CHANGE_ATTRIB,
  CHANGE_PAGINA,
  GET_ALL_PERSONS,
  GET_PERSON_BY_ATRIB,
  GET_PERSON_BY_LIMIT,
  RESET_ULT_DOC,
} from "./types";

export const getAllPersons = () => {
  return async function (dispatch) {
    const personasCollection = collection(db, "persona");
    const data = query(personasCollection, orderBy("nombre"), limit(3));
    const snapshot = await getDocs(data);
    // const data = await getDocs(personasCollection);
    let doc = [];
    snapshot.forEach((persona) => {
      // console.log(persona.id);
      doc.push(persona.data());
    });
    if (data) {
      dispatch({
        type: GET_ALL_PERSONS,
        payload: doc,
        ultimo: doc[doc.length - 1],
      });
    }
  };
};
export const getPersonByLimit = (ult_doc) => {
  return async function (dispatch) {
    const personasCollection = collection(db, "persona");
    const data = query(
      personasCollection,
      orderBy("nombre"),
      startAfter(ult_doc.nombre),
      limit(3)
    );
    const snapshot = await getDocs(data);
    let doc = [];
    snapshot.forEach((persona) => {
      doc.push(persona.data());
    });
    if (doc.length === 0) {
      dispatch({
        type: RESET_ULT_DOC,
      });
    } else if (data) {
      dispatch({
        type: GET_PERSON_BY_LIMIT,
        payload: doc,
        ultimo: doc[doc.length - 1],
      });
    }
  };
};
export const getPersonByAttrib = (personas, colum, value) => {
  return async function (dispatch) {
    const personasCollection = collection(db, "persona");
    const data = query(personasCollection, where(colum, "==", value));
    const snapshot = await getDocs(data);
    let docs = [];
    snapshot.forEach((person) => {
      docs.push(person.data());
    });
    console.log(colum, value, docs);
    if (snapshot > 0) {
      dispatch({
        type: GET_PERSON_BY_ATRIB,
        payload: snapshot.docs,
      });
    }
  };
};
export const changeFilterAttrib = (attrib) => {
  return function (dispatch) {
    dispatch({
      type: CHANGE_ATTRIB,
      payload: attrib,
    });
  };
};
export const changePagina = (pagina) => {
  return function (dispatch) {
    dispatch({
      type: CHANGE_PAGINA,
      payload: pagina + 20,
    });
  };
};
