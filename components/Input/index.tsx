import { TextInput, TextInputProps, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./style";
import { Controller, UseControllerProps } from "react-hook-form";
import { forwardRef } from "react";
import { clsx } from "clsx";

type Props = {
    icon: keyof typeof Feather.glyphMap;
    formProps: UseControllerProps;
    inputProps: TextInputProps;
    error: string;
};

const Input = forwardRef<TextInput, Props> (({ icon, formProps, inputProps, error = '' }, ref) => {
    return (
        <Controller 
            render={({ field }) => (
                <View style={styles.container}>
                    <View style={styles.group}>
                        <View style={styles.icon}>
                            <Feather 
                            name={icon}
                            size={24}
                            color={clsx({
                                ["#DC1637"]: error.length > 0,
                                ["#0000FF"]: (error.length === 0 && field.value),
                                ["#999"]: (!field.value && error.length === 0)
                            })} 
                            />
                        </View>
                        <TextInput
                        
                        ref={ref}
                        value={field.value}
                        onChangeText={field.onChange}
                        style={styles.control}
                        {...inputProps}
                        />
                    </View>
                    { error.length > 0 &&
                    <Text style={styles.error}>
                    {error}
                    </Text>
                    }

                </View>
            )}
            {...formProps}
        />
    );
});

export { Input };
