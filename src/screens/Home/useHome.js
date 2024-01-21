import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {getAllNotes} from '../../helpers';

const useHome = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);

  const userName = 'Binusian';

  const getData = async () => {
    const dataNotes = await getAllNotes();
    setData(dataNotes);
  };

  const navigateToEdit = itemData => {
    navigation.navigate('EditNote', {itemData, onGoBack: getData});
  };

  useEffect(() => {
    getData();
  }, [navigation]);

  return {
    nav: {
      navigateToEdit,
    },
    state: {
      data,
      userName,
    },
    func: {},
  };
};

export default useHome;
