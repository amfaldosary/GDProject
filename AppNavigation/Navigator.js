import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './../AppComponents/Login/Login';
import Home from './../AppComponents/Home/Home';
import Registration from './../AppComponents/Registration/Registration';
import DestinationType from './../AppComponents/DestinationType/DestinationType';

const Navigator = createStackNavigator({
    Login: { screen: Login },
    Home: { screen: Home },
    Registration: { screen: Registration},
    DestinationType: { screen: DestinationType },
});
const Container = createAppContainer(Navigator)
export default Container;