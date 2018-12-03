import { DrawerNavigator } from 'react-navigation';
import Home from './Home';
import ExamHistory from './ExamHistory';
import Account from './Account';
import Setting from './Setting';
import AboutUs from './AboutUs';
import Drawer from '../components/Drawer';

export default DrawerNavigator({
  Home: {
    screen: Home
  },
  ExamHistory: {
    screen: ExamHistory
  },
  Account: {
    screen: Account
  },
  Setting: {
    screen: Setting
  },
  AboutUs: {
    screen: AboutUs
  }
}, {
  initialRouteName: 'Home',
  contentComponent: Drawer
});
