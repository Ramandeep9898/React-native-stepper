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
  // return (
  //   <SafeAreaView style={styles.container}>
  //     <View style={styles.containerBg}>

  //     </View>
  //     {/* PersonalInfo */}
  //     {/* <View style={styles.pageContainer}>
  //       <View style={styles.header} >
  //         <PaginationButton title="1" />
  //         <PaginationButton title="2" />
  //         <PaginationButton title="3" />
  //         <PaginationButton title="4" />
  //       </View>

  //       <Sheet>
  //         <Typography variant="heading">{heading}</Typography>
  //         <Typography variant="mutedText">{mutedText}</Typography>
  //         {input.map((ele) => (
  //           <InputWithLabel label={ele.label} placeholder={ele.placeHolder} />
  //         ))}
  //       </Sheet>
  //     </View> */}

  //     {/* select plan */}
  //     {/* <View style={styles.pageContainer}>
  //       <View style={styles.header} >
  //         <PaginationButton title="1" />
  //         <PaginationButton title="2" />
  //         <PaginationButton title="3" />
  //         <PaginationButton title="4" />
  //       </View>

  //       <Sheet>
  //         <Typography variant="heading">{heading}</Typography>
  //         <Typography variant="mutedText">{mutedText}</Typography>
  //         <SelectPlanCard cardDetails={cardDetails} />
  //         <View style={{
  //           backgroundColor: "#fbf9f9",
  //           padding: 10, borderRadius: 8,
  //           flexDirection: "row",
  //           justifyContent: "center",
  //           alignItems: "center",
  //           gap: 8

  //         }}>
  //           <Text style={{
  //             color: colors.secondary,
  //             fontWeight: "bold"
  //           }}>
  //             Monthly
  //           </Text>
  //           <Button variant={"toggleButton"} />
  //           <Text style={{
  //             color: colors.grey,
  //             fontWeight: "normal"
  //           }}>
  //             Yearly

  //           </Text>
  //         </View>

  //       </Sheet>


  //     </View> */}

  //     {/* Addon */}
  //     {/* <View style={styles.pageContainer}>
  //       <View style={styles.header} >
  //         <PaginationButton title="1" />
  //         <PaginationButton title="2" />
  //         <PaginationButton title="3" />
  //         <PaginationButton title="4" />
  //       </View>

  //       <Sheet>
  //         <Typography variant="heading">{heading}</Typography>
  //         <Typography variant="mutedText">{mutedText}</Typography>
  //         <CheckBoxComponent details={cardDetails} /> 
  //       </Sheet> 
  //     </View> */}


  //     {/* Finishing up  */}
  //     <View style={styles.pageContainer}>
  //       <Header />

  //       <Sheet>
  //         <Typography variant="heading">{heading}</Typography>
  //         <Typography variant="mutedText">{mutedText}</Typography>

  //         <Sheet variant={"greyBg"}>
  //           <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: colors.grey, paddingBottom: 10 }}>
  //             <View>
  //               <Text style={{ color: colors.secondary, fontWeight: "bold" }}>Arcade (Monthly)</Text>
  //               <Text style={{ color: colors.grey, fontWeight: "normal", textDecorationLine: "underline" }}>change</Text>
  //             </View>
  //             <Text style={{ color: colors.secondary, fontWeight: "bold" }}>$9/mo</Text>
  //           </View>

  //           <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 4 }}>
  //             <Text style={{ color: colors.grey, fontWeight: "normal" }}>Online service</Text>
  //             <Text style={{ color: colors.secondary, fontWeight: "normal" }}>+$1/mo</Text>
  //           </View>

  //           <View style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: 8 }}>
  //             <Text style={{ color: colors.grey, fontWeight: "normal" }}>Larger storage</Text>
  //             <Text style={{ color: colors.secondary, fontWeight: "normal" }}>+$2/mo</Text>
  //           </View>
  //         </Sheet>

  //         <View style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: 8, paddingHorizontal: 16, }}>
  //           <Text style={{ color: colors.grey, fontWeight: "normal" }}>Total (per month)</Text>
  //           <Text style={{ color: colors.primary, fontWeight: "bold" }}>+$12/mo</Text>
  //         </View>
  //       </Sheet>
  //     </View>
  //     <View style={{ backgroundColor: "white", paddingVertical: 24, paddingHorizontal: 16, position: "absolute", bottom: 0, width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
  //       <Button variant={"ghost"} title={"Go Back"} />
  //       <Button title={"Confirm"} />
  //     </View>
  //   </SafeAreaView >
  // );
}













