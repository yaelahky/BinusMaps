import React from 'react';
import {Dimensions, StatusBar, Text, View} from 'react-native';
import useHome from './useHome';
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  enableLatestRenderer,
} from 'react-native-maps';

let contextValue = {};
enableLatestRenderer();

const HomeContext = React.createContext(contextValue);

const Home = () => {
  const {nav, func, state} = useHome();
  contextValue = {nav, func, state};

  const markerCoordinate = {
    latitude: -6.2017585,
    longitude: 106.7796798,
  };

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
          Hi {state.userName}!
        </Text>
        <View style={{backgroundColor: 'grey'}}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{height: 500, width: Dimensions.get('window').width - 32}}
            region={{
              latitude: -6.2017585,
              longitude: 106.7796798,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            <Marker
              coordinate={markerCoordinate}
              title="Binus Anggrek"
              description="Lokasi Kampus"
            />
          </MapView>
        </View>
      </View>
    </HomeContext.Provider>
  );
};

export default Home;
