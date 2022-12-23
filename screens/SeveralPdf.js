import React, { useEffect} from 'react';
import { View, text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { StyleSheet, Dimensions } from 'react-native';
import Pdf from 'react-native-pdf';
// import BookDetail from './BookDetail';
// import { bookTheMetropolis, book} from './Home';
// import { bookmark_icon } from '../constants/icons';

const Pidy = () => {
    useEffect(
        () => {
            SplashScreen.hide();
        }, []
    )


    const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };

    
    return (
        <View style={styles.container}>
            <Pdf
                source={source}
                onLoadComplete={(numberOfPages,filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page,numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
                style={styles.pdf}/>
        </View>
    )
          
            }

            const styles = StyleSheet.create({
                container: {
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginTop: 25,
                },
                pdf: {
                    flex:1,
                    width:Dimensions.get('window').width,
                    height:Dimensions.get('window').height,
                }
            });

            export default Pidy;