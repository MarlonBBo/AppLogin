import { TextInput, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./style";

type InputProps = {
    icon: string;
    placeholder: string;
}

export function Input({ icon, placeholder }: InputProps){
    return (
        <View style={styles.container}>
            <TextInput />
            <MaterialIcons name="person" size={24} color="black" />
        </View>
    )
}
