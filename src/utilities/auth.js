import { AsyncStorage } from 'react-native';

export const USER_KEY = 'auth-demo-key';
const authUrl = 'http://192.168.56.1:3000/';

export const onSignIn = (dob, pno) => {
  return fetch(authUrl + 'stdSignIn', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      date_of_birth: dob,
      e_phone_no: pno,
    }),
  }).then((response) => response.json())
  .then((responseJson) => {
    if (responseJson.status) AsyncStorage.setItem(USER_KEY, 'true');
    return responseJson;
  }).catch((error) => {
    console.error(error);
  });
};

export const onSignOut = () =>  {
  return new Promise((resolve, reject) => {
    AsyncStorage.removeItem(USER_KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};
