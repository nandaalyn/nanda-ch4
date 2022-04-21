import axios from 'axios';
import { GET_CAR } from '../types';

export const getCar = () => {
  return (dispatch) => {
    dispatch({ type: `${GET_CAR}_LOADING` });

    axios({
      method: 'GET',
      url: 'https://rent-cars-api.herokuapp.com/customer/car',
    })
      .then((response) => {
        dispatch({
          type: `${GET_CAR}_FULFILLED`,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: `${GET_CAR}_ERROR`,
          error: error.message,
        });
      });
  };
};

export const noCar = () => {
  return (dispatch) => {
    dispatch({ type: `${GET_CAR}_LOADING` });
  }
}
// export const createCar = (data) => {
//   return (dispatch) => {
//     dispatch({ type: `${CREATE_CAR}_LOADING` });

//     axios({
//       method: 'POST',
//       url: 'http://localhost:3001/car',
//       data,
//     })
//       .then(() => {
//         dispatch({
//           type: `${CREATE_CAR}_FULFILLED`,
//           // payload: response.data,
//         });
//         dispatch(getCar());
//       })
//       .catch((error) => {
//         dispatch({
//           type: `${CREATE_CAR}_ERROR`,
//           error: error.message,
//         });
//       });
//   };
// };

// export const editCar = (id, data) => {
//   return (dispatch) => {
//     dispatch({ type: `${EDIT_CAR}_LOADING` });

//     axios({
//       method: 'PUT',
//       url: `http://localhost:3001/car/${id}`,
//       data,
//     })
//       .then(() => {
//         dispatch({
//           type: `${EDIT_CAR}_FULFILLED`,
//           // payload: response.data,
//         });
//         dispatch(getCar());
//       })
//       .catch((error) => {
//         dispatch({
//           type: `${EDIT_CAR}_ERROR`,
//           error: error.message,
//         });
//       });
//   };
// };

// export const deleteCar = (id) => {
//   return(dispatch) => {
//     dispatch ({ type: `${DELETE_CAR}_LOADING` });
    
//     axios({
//       method: 'DELETE',
//       url: `http://localhost:3001/car/${id}`,
//     })
//     .then(() => {
//       dispatch({
//         type: `${DELETE_CAR}_FULFILLED`,
//       });
//       dispatch(getCar());
//     })
//     .catch((error) => {
//       dispatch({
//         type: `${DELETE_CAR}_ERROR`,
//         error: error.message,
//       });
//     })
//   };
// };
