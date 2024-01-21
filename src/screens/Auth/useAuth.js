import {useNavigation} from '@react-navigation/native';
import {Alert, Platform, ToastAndroid} from 'react-native';
import {useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const useAuth = () => {
  const navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure({
      androidClientId: 'YOURKEY.apps.googleusercontent.com',
      webClientId: 'YOURKEY.apps.googleusercontent.com',
      iosClientId: 'YOURKEY.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  }, []);

  const googleSignUp = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn()
        .then(() => {
          GoogleSignin.getTokens().then(res => {
            navigateToHome();
          });
        })
        .catch(() => {
          showToast('Autentikasi dibatalkan.');
        });
    } catch (error) {
      showToast(error);
    }
  };

  const showToast = message => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      Alert.alert(message);
    }
  };

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  const handleRequestBiometric = async () => {
    googleSignUp();
  };

  return {
    nav: {
      navigateToHome,
    },
    state: {},
    func: {
      handleRequestBiometric,
    },
  };
};

export default useAuth;
