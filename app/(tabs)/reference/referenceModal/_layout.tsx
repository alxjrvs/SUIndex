import { Stack } from 'expo-router'

export default function ReferenceModalLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, presentation: 'transparentModal' }}
      />
    </Stack>
  )
}
