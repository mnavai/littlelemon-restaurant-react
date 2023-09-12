// import React, { useReducer } from "react";
// import { Route, Routes, useNavigate } from "react-router-dom";
// import Home from "./Home";
// import ConfirmedBooking from "./ConfirmedBooking";
// import BookingPage from "./BookingPage";
// import NotFound from "./NotFound";


// const Main = () => {
//   const seedRandom = (seed) => {
//     var m = 2 ** 35 - 31;
//     var a = 185852;
//     var s = seed % m;
//     return function () {
//       return (s = (s * a) % m) / m;
//     };
//   };

//   const fetchAPI = (date) => {
//     let result = [];
//     let random = seedRandom(date.getDate());
//     for (let i = 17; i <= 23; i++) {
//       if (random() < 0.5) {
//         result.push(i + ":00");
//       }
//       if (random() > 0.5) {
//         result.push(i + ":30");
//       }
//     }
//     return result;
//   };

//   const submitAPI = (formData) => {
//     return true;
//   };

//   const updateTimes = (state, date) => {
//     return { availableTimes: fetchAPI(new Date()) };
//   };

//   const initialState = { availableTimes: fetchAPI(new Date()) };
//   const [state, dispatch] = useReducer(updateTimes, initialState);

//   const navigate = useNavigate();
//   const submitForm = (formData) => {
//     if (submitAPI(formData)) {
//       navigate("/confirmedbooking");
//     }
//   };
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route
//           path="/booking"
//           element={
//             <BookingPage
//               availableTimes={state}
//               dispatch={dispatch}
//               submitForm={submitForm}
//             />
//           }
//         />
//         <Route path="/confirmedbooking" element={<ConfirmedBooking />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// };
// export default Main;
