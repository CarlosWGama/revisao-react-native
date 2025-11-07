import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack 
            screenOptions={{
                headerShown: false,
                animation: 'ios_from_left'
            }}
        >
            <Stack.Screen name="index" options={{ 
                title: "Login"
            }} />
            <Stack.Screen name="auth" options={{ 
                title: "Home"
            }} />
        </Stack>
    )
}