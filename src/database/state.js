import { rerenderEntireTree } from "../render";
// import weatherReducer from "./weatherReducer";

// let store = {
//   state: {
//     accesses: {
//       byEmail: [{ id: "007", email: "vyacheslav.tarshevskiy@gmail.com" }],
//     },
//     weatherInfo: { byLocation: [{ location: "", temperature: "" }] },
//   },
//   rerenderEntireTree() {
//     console.log("state changed");
//   },

//   addInfoWeather(weathInfo) {
//     let locationWeather = weathInfo.location;
//     let temperatureWeather = weathInfo.temperature;

//     this.state.weatherInfo.byLocation.push({
//       location: locationWeather,
//       temperature: temperatureWeather,
//     });
//   },

//   dispatch(action) {
//     this.state.weatherInfo = weatherReducer(this.state.weatherInfo, action);
//   },
// };
let state = {
  accesses: {
    byEmail: [{ id: "007", email: "vyacheslav.tarshevskiy@gmail.com" }],
  },
  weatherInfo: {
    byLocation: [
      { temp: "", city: "", country: "", pressure: "", sunset: "", error: "" },
    ],
  },
};

// export default store;
// window.store = store;

export let addInfoWeather = (weathInfo) => {
  let temperature = weathInfo.temp;
  let cityName = weathInfo.city;
  let location = weathInfo.country;
  let pressureShow = weathInfo.pressure;
  let sunsetTime = weathInfo.sunset;
  let checkError = weathInfo.error;

  state.weatherInfo.byLocation.push({
    temp: temperature,
    city: cityName,
    country: location,
    pressure: pressureShow,
    sunset: sunsetTime,
    error: checkError,
  });
  rerenderEntireTree(state);

  // console.log("hai", weathInfo);
};


export default state;
