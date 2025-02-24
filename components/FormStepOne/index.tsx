import { Text, TextInput, View } from "react-native";
import { styles } from "./style";
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { Button } from "../Button";

export function FormStepOne(){

    const { control, handleSubmit, formState: {errors} } = useForm(); 
    const emailRef = useRef<TextInput>(null)
    const passwordRef = useRef<TextInput>(null)

    console.log(errors)

    function headleNext(data: any)  {
        console.log(data)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Crie sua conta</Text>
            
            <Input 
            icon="user"
            formProps={{
                name: "name",
                control,
                rules:{
                    required: "Nome vazio"
                }
            }}
            inputProps={{ 
                placeholder: "Name",
                onSubmitEditing: () => emailRef.current?.focus(),
                returnKeyType: "next"
            }}
            />

            <Input 
            ref={emailRef}
            icon="mail"
            formProps={{
                name: "email",
                control,
                rules:{
                    required: "Email vazio"
                }
            }}
            inputProps={{ 
                placeholder: "E-mail",
                onSubmitEditing: () => passwordRef.current?.focus(),
                returnKeyType: "next",
            }}
            />

            <Input 
            ref={passwordRef}
            icon="key"
            formProps={{
                name: "password",
                control,
                rules:{
                    required: "senha vazio"
                }
            }}
            inputProps={{ 
                placeholder: "Password",
                onSubmitEditing: handleSubmit(headleNext),
            }}
            />

            <Button 
            title="Confirmar"
            onPress={handleSubmit(headleNext)}  
            />

        </View>
    )
}
