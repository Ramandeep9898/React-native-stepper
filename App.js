import { PersonalInfo, SelectYourPlan, PickAddOn, FinishingUp } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DataProvider } from './src/hooks/useStore';
const Stack = createNativeStackNavigator();


export default function App() {


  return (
    <DataProvider>

      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
          <Stack.Screen name="SelectYourPlan" component={SelectYourPlan} />
          <Stack.Screen name="PickAddOn" component={PickAddOn} />
          <Stack.Screen name="FinishingUp" component={FinishingUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>

  )
}













