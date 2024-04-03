import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useLogging } from '../hooks/useLogging';
import { IStackScreenProps } from '../library/IntroScreenProps';

const IntroScreen: React.FunctionComponent<IStackScreenProps> = ({navigation}) => {
    const [logging] = useLogging('Intro Screen');
    // const { navigation, route } = props;

    useEffect(() => {
        logging.info('Intro Screen loaded.');
    }, [logging]);

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button mode="contained" onPress={() => navigation.navigate('SignIn')}>ĐĂNG NHẬP</Button>
            </View>
            <View style={styles.buttonContainer}>
            <Button mode="contained" onPress={() => navigation.navigate('SignUp')}>ĐĂNG KÝ</Button>

            </View>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        marginVertical: 10,
        width: 150
    }
});

export default IntroScreen;