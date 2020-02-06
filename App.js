import React from 'react';
import SelectLevel from './pages/SelectLevel';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CitySports from './pages/CitySports';
import SelectSport from './pages/SelectSport';

const MainNavigator = createStackNavigator({
  Sport: SelectSport,
  Sports: CitySports,
  Select: SelectLevel,
});

const AppContainer = createAppContainer(MainNavigator);

const App = () => {
  return <AppContainer />;
};

export default App;
