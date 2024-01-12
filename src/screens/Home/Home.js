import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import useHome from './useHome';

let contextValue = {};

const HomeContext = React.createContext(contextValue);

const Home = () => {
  const {nav, func, state} = useHome();
  contextValue = {nav, func, state};

  return (
    <HomeContext.Provider value={contextValue}>
      <StatusBar backgroundColor="#F7F8FA" barStyle="dark-content" />
      <View
        style={{
          height: '100%',
          backgroundColor: '#F7F8FA', // F7F8FA
          padding: 16,
        }}>
        <Text
          style={{
            fontWeight: '800',
            fontSize: 38,
            color: '#080808',
          }}>
          Hi Binusian!
        </Text>
        <Text style={{marginTop: 4, fontSize: 14}}>{state.userName}</Text>
      </View>
    </HomeContext.Provider>
  );
};

export default Home;
