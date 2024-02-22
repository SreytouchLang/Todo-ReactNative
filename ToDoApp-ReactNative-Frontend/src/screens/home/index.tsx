import Loader from "@/components/shared/loader"
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper"
import Task from "@/components/tasks/task"
import TaskActions from "@/components/tasks/task-actions"
import { fetcher } from "@/services/config"
import useUserGlobalStore from "@/store/useUserGlobalStore"
import { ICategory, ITask } from "@/types"
import { getGreeting } from "@/utils/helpers"
import { AnimatedText, Box, Text } from "@/utils/theme"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { format } from "date-fns"
import React from "react"
import  { FlatList, Button } from "react-native"
import { ZoomInEasyDown } from "react-native-reanimated"

import useSWR from "swr"

const today = new Date()

const greeting = getGreeting({ hour: new Date().getHours() })

const HomeScreen = () => {
  const { user } = useUserGlobalStore()

  const {
    data: tasks,
    isLoading,
    mutate: mutateTasks,
  } = useSWR<ITask[]>("tasks/", fetcher)

  if (isLoading || !tasks) {
    return <Loader />
  }

  const Logout = async() => {
    AsyncStorage.clear();
  }

  return (
    <SafeAreaWrapper>
      <Box flex={1} mx="4">
        <AnimatedText
          variant="textXl"
          fontWeight="500"
          entering={ZoomInEasyDown.delay(500).duration(700)}
        >
          Good {greeting} {user?.name}
        </AnimatedText>
        <Text variant="textXl" fontWeight="500">
          It’s {format(today, "eeee, LLL dd")} - {tasks.length} tasks
        </Text>
        <Box height={26} />
        <TaskActions categoryId="" />
        <Box height={26} />
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Task task={item} mutateTasks={mutateTasks} />
          )}
          ItemSeparatorComponent={() => <Box height={14} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item._id}
        />
      </Box>
      {/* <Text onPress={Logout}>Logout</Text> */}
    </SafeAreaWrapper>
  )
}

export default HomeScreen
