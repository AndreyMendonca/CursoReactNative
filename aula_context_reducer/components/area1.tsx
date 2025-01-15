import { useContext } from "react"
import { Text } from "react-native"
import { AuthContext } from "../contexts/auth"


export const Area = () =>{
    const auth = useContext(AuthContext)

    return (
        <Text>Area 1 {auth?.data.user?.email}</Text>
    )
}