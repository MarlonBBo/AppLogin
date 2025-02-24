import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    group: {
        width: '100%',
        height: 56,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
    },
    icon: {
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRightColor: "#F4F5F6",
        borderRightWidth: 3,
    },
    control: {
        flex: 1,
        padding: 16,
        fontSize: 16,
        
    }
})
