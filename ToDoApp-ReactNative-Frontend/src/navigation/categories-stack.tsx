import CategoriesScreen from "@/screens/categories"
import CategoryScreen from "@/screens/category"
import CreateCategoryScreen from "@/screens/create-category"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { CategoriesStackParamList } from "./types"

const Stack = createNativeStackNavigator<CategoriesStackParamList>()

const CategoriesStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateCategory"
        component={CreateCategoryScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default CategoriesStackNavigator
