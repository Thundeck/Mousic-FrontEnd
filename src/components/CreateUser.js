import React from 'react'
import { useState } from 'react'
import { Text, View, TextInput} from 'react-native'

const initialState = {
    name:"",
    lastname:"",
    nickname:"",
    password:"",
    repeatPassword:"",
    email:""
} 


const CreateUser = () => {

    const [form, setForm] = useState(initialState) 

  return (
    <View>
        <Text>
            CreateUser
        </Text>
        <View>
            <TextInput 
            placeholder='Name...'
            name="name"
            value={form.name} />
            <TextInput 
            placeholder='Lastname...'
            name="lastname"
            value={form.lastname} />
            <TextInput 
            placeholder='nickname...'
            name="nickname"
            value={form.nickname} />
            <TextInput 
            placeholder='Password...'
            name="password"
            value={form.password} />
                        <TextInput 
            placeholder='Repeat password...'
            name="repeatPassword"
            value={form.repeatPassword} />
        </View>
    </View>
  )
}

export default CreateUser