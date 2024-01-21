import React from 'react';
import {
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {bgBinus} from '../../assets';
import useAuth from './useAuth';

let contextValue = {};

const AuthContext = React.createContext(contextValue);

const Auth = () => {
  const {nav, func, state} = useAuth();
  contextValue = {nav, func, state};

  return (
    <AuthContext.Provider value={contextValue}>
      <StatusBar backgroundColor="#0397DA" barStyle="dark-content" />
      <ImageBackground
        source={bgBinus}
        resizeMode="cover"
        style={{
          flex: 1,
          height: '100%',
          justifyContent: 'center',
        }}>
        <View style={{padding: 16}}>
          <Text
            style={{
              fontWeight: '800',
              fontSize: 32,
              textAlign: 'center',
              color: '#080808',
            }}>
            Cari Lokasi Universitas Bina Nusantara
          </Text>
          <Text style={{marginTop: 12, fontSize: 14, textAlign: 'center'}}>
            Binus Maps - Cari lokasi dengan mudah
          </Text>
          <View style={{marginTop: 64, marginBottom: 32}} />
          <TouchableOpacity
            onPress={func.handleRequestBiometric}
            activeOpacity={0.5}
            style={{backgroundColor: '#0397DA', padding: 16, borderRadius: 32}}>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontWeight: '500', fontSize: 14, color: 'white'}}>
                Masuk dengan Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </AuthContext.Provider>
  );
};

export default Auth;
