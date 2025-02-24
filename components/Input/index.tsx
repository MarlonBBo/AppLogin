import { TextInput, TextInputProps, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./style";
import { Controller, UseControllerProps } from "react-hook-form";
import { forwardRef } from "react";

type Props = {
    icon: keyof typeof Feather.glyphMap;
    formProps: UseControllerProps;
    inputProps: TextInputProps;
};

const Input = forwardRef<TextInput, Props> (({ icon, formProps, inputProps }, ref) => {
    return (
        <Controller 
            render={({ field }) => (
                <View style={styles.container}>
                    <View style={styles.group}>
                        <View style={styles.icon}>
                            <Feather name={icon} size={24} color="black" />
                        </View>
                        <TextInput
                        
                        ref={ref}
                        value={field.value}
                        onChangeText={field.onChange}
                        style={styles.control}
                        {...inputProps}
                        />
                    </View>
                </View>
            )}
            {...formProps}
        />
    );
});

export { Input };
