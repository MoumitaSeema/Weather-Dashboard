import React from "react";

import {
  FavouriteProvider,
  WeatherProvider,
  LocationProvider,
} from "./provider";
import Page from "./Page";

const App = () => {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <Page />
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
};

export default App;
