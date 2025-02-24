import { Text, View } from "react-native";
import { styles } from "./style";
import { Input } from "../Input";

export function FormStepOne(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Criar sua conta</Text>
            
            <Input />
        </View>
    )
}
