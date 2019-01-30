import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './../AppComponents/Login/Login';
import Home from './../AppComponents/Home/Home';
import Registration from './../AppComponents/Registration/Registration';

const Navigator = createStackNavigator({
    Login: { screen: Login },
    Home: { screen: Home },
    Registration: { screen: Registration},
});
const Container = createAppContainer(Navigator)
export default Container;