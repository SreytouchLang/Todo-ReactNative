import useUserGlobalStore from "@/store/useUserGlobalStore"
import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import AppStackNavigator from "./app-stack"
import AuthStackNavigator from "./auth-stack"

const Navigation = () => {
  const { user } = useUserGlobalStore()

  return (
    <NavigationContainer>
      {user ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  )
}

export default Navigation
