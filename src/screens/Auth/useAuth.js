import {useNavigation} from '@react-navigation/native';
import ReactNativeBiometrics from 'react-native-biometrics';
import {Alert, Linking, Platform, ToastAndroid} from 'react-native';
import {useState} from 'react';

const useAuth = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');

  const showToast = message => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      Alert.alert(message);
    }
  };

  const navigateToHome = () => {
    navigation.navigate('Home', {name});
  };

  const handleRequestBiometric = async () => {
    if (name === '') {
      showToast('Nama tidak boleh kosong');
      return;
    }

    const rnBiometrics = new ReactNativeBiometrics();

    const {available} = await rnBiometrics.isSensorAvailable();

    if (available) {
      rnBiometrics
        .simplePrompt({promptMessage: 'Verifikasi dengan sidik jari'})
        .then(() => {
          showToast('Biometric authentication success');
          navigateToHome();
        })
        .catch(() => {
          showToast('Biometric authentication failed');
        });
    } else {
      navigateToHome();
      showToast('Biometric authentication not supported, bypass auth...');
    }
  };

  const handleLinkedInPress = () => {
    Linking.openURL('https://www.linkedin.com/in/ananda-rizky-yuliansyah');
  };

  return {
    nav: {
      navigateToHome,
    },
    state: {
      name,
    },
    func: {
      handleRequestBiometric,
      handleLinkedInPress,
      setName,
    },
  };
};

export default useAuth;
