import React from 'react';
import {
  ImageBackground,
  StatusBar,
  Text,
  TextInput,
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
          <View style={{marginTop: 64, marginBottom: 32}}>
            <View
              style={{backgroundColor: 'white', padding: 4, borderRadius: 16}}>
              <TextInput
                onChangeText={text => func.setName(text)}
                value={state.name}
                style={{
                  fontWeight: '400',
                  fontSize: 16,
                  color: '#080808',
                }}
                placeholder="Masukkan Nama Lengkap"
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={func.handleRequestBiometric}
            activeOpacity={0.5}
            style={{backgroundColor: '#0397DA', padding: 16, borderRadius: 32}}>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontWeight: '500', fontSize: 14, color: 'white'}}>
                Masuk
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={func.handleLinkedInPress}>
            <Text style={{marginTop: 16, fontSize: 12, textAlign: 'center'}}>
              Made with ❤ by Ananda Rizky Yuliansyah{'\n'}for Personal
              Assignment 2
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </AuthContext.Provider>
  );
};

export default Auth;
