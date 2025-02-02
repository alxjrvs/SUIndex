import { Stack } from 'expo-router'

export default function ReferenceModalLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[type]/[name]"
        options={{
          presentation: 'transparentModal',
          animation: 'fade',
          headerShown: false,
        }}
      />
    </Stack>
  )
}
