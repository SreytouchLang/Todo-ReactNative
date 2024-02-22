import Button from "@/components/shared/button"
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import { AuthScreenNavigationType } from "@/navigation/types"
import { Box, Text } from "@/utils/theme"
import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"
import React from "react"

const WelcomeScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>()
  const navigateToSignInScreen = () => {
    navigation.navigate("SignIn")
  }
  const navigateToSignUpScreen = () => {
    navigation.navigate("SignUp")
  }

  return (
    <SafeAreaWrapper>
      <LinearGradient
        colors={[
          "#ffffff",
          "#fcecff",
          "#f8daff",
          "#fae2ff",
          "#fae2ff",
          "#ffffff",
        ]}
        style={{ flex: 1 }}
      >
        <Box flex={1} justifyContent="center">
          <Text textAlign="center" variant="textXl" fontWeight="700">
            Do you want to be more productive?
          </Text>
          <Box my="3.5" mx="10">
            <Button
              label="Start your journey"
              onPress={navigateToSignUpScreen}
            />
          </Box>
        </Box>
      </LinearGradient>
    </SafeAreaWrapper>
  )
}

export default WelcomeScreen
