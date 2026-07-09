import { Tabs } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';

const TabLayout = () =>{
    return(
        <Tabs screenOptions={{
            tabBarActiveTintColor:"rgb(17, 72, 48)",
            headerStyle:{
                backgroundColor:"rgb(16, 125, 90)"
            }
        }}>
            <Tabs.Screen name="index"
                options={{
                    title:"Home",
                    tabBarIcon:({color})=><Entypo name="home" size={20} color={color}/>
                }}
                />
        </Tabs>
    )
}

export default TabLayout;