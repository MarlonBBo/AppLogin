import { Text, TextInput, View } from "react-native";
import { styles } from "./style";
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { Button } from "../Button";

export function FormStepTwo(){

    const { control, handleSubmit, formState: {errors} } = useForm(); 
    const emailRef = useRef<TextInput>(null)
    const passwordRef = useRef<TextInput>(null)

    function headleNext(data: any)  {
        console.log(data)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Entrar</Text>
            
            <Input 
            ref={emailRef}
            icon="mail"
            error={errors.email?.message}
            formProps={{
                name: "email",
                control,
                rules:{
                    required: "Email é obrigatório",
                    pattern: {
                        value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i,
                        message: "Email inválido."
                    }
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
            error={errors.password?.message}
            formProps={{
                name: "password",
                control,
                rules:{
                    required: "Senha é obrigatório"
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
