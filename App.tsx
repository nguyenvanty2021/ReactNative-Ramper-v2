/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
// import {Auth} from '@ramper/react-native-core';
import {RamperScreen} from '@ramper/react-native-core';
import {SafeAreaView, useColorScheme, Linking, Button} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Ramper} from '@ramper/react-native-core';
Ramper.configure({
  appId: 'pcsnabqhiu',
  locale: 'en',
  chainName: 'ethereum',
});

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const supported = async () => {
    await Linking.openURL('https://auth.v1.ramper.xyz');
  };
  // const handleSignin = async () => {
  //   try {
  //     const user = await Auth.signin(
  //       'google',
  //       //    browserProps, //optional
  //     );
  //     console.log(user);
  //     // handle response
  //   } catch (error) {
  //     // handle error
  //   }
  // };
  useEffect(() => {
    //handleSignin();
  }, []);
  return (
    <SafeAreaView style={backgroundStyle}>
      <Button title={'test'} onPress={supported} />
      <RamperScreen
        providers={[
          {
            name: 'google',
          },
          {
            name: 'facebook',
          },
          {
            name: 'twitter',
          },
          {
            name: 'apple',
          },
        ]}
        theme="light"
        onSuccess={user => {
          //handle user
          console.log(user, '___ USer');
        }}
        onFailure={error => {
          // handle error
          console.log(error);
        }}
        onClose={() => {}}
        // logo={require('mylogo') | {uri: 'mylogourl'}}
        // browserProps={{
        //   modalEnabled: true,
        //   animated: true,
        //   readerMode: true,
        //   enableBarCollapsing: true,
        //   ephemeralWebSession: true,
        // }}
      />
    </SafeAreaView>
  );
}
export default App;
