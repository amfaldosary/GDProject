import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './../AppComponents/Login/Login';
import Home from './../AppComponents/Home/Home';

const Navigator = createStackNavigator({
    Login: { screen: Login },
    Home: { screen: Home },
});
const Container = createAppContainer(Navigator)
export default Container;