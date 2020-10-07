import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial131316Navigator from '../features/Tutorial131316/navigator';
import NotificationList131288Navigator from '../features/NotificationList131288/navigator';
import Settings131287Navigator from '../features/Settings131287/navigator';
import Settings131279Navigator from '../features/Settings131279/navigator';
import UserProfile131277Navigator from '../features/UserProfile131277/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial131316: { screen: Tutorial131316Navigator },
NotificationList131288: { screen: NotificationList131288Navigator },
Settings131287: { screen: Settings131287Navigator },
Settings131279: { screen: Settings131279Navigator },
UserProfile131277: { screen: UserProfile131277Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
