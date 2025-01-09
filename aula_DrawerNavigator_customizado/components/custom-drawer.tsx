import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer"
import { router } from "expo-router"
import { Button, StyleSheet, Text, View } from "react-native"

export const CustomDrawer = (props: DrawerContentComponentProps) => {
    const handleMenuButton = () =>{
        router.push('/about')
    }
    
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.headerArea}>

            </View>
            <Button title="Home" onPress={() => router.navigate('/')} />
            <Button title="Sober" onPress={() => router.navigate('/about')} />
            <DrawerItem 
                label="Algum irem"
                onPress={handleMenuButton}
            />
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    headerArea:{
        backgroundColor: '#FF0000',
        height: 80
    }
})