import { View, Text, FlatList } from 'react-native'
import React from 'react'
import axios from 'axios'

export default function index() {
    const [data, setData] = React.useState([])
    // const [text, setText] = React.useState('')
    const [textInput, setTextInput] = React.useState('')
    const apiKey = "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"
    // const apiUrl = "https://api.openai.com/v1/completions"
    const apiUrl = "https://api.openai.com/v1/engines/text-davinci-002/completions"

    const handleSend = async() => {
        const prompt = text
        const response = await axios.post(apiKey, {
            prompt: prompt,
            max_tokens: 1024,
            temperature: 0.7
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            }
        })
        const text = response.data.choices[0].text
        setData([...data, {type: 'user', 'text': textInput}, {type: 'bot', 'text': text}])
        setTextInput('')
    }

  return (
    <View>
      <Text>index</Text>
      <FlatList data={data} keyExtractor={(item, index) => index.toString()} renderItem={({item}) => (
        <View style={{flexDirection: 'row', padding: 10}}>
            <Text style={{color: item.type === 'user' ? 'red' : 'blue'}}>{item.type === 'user' ? 'ninja' : 'Bot'}</Text>
            <Text>{item.text}</Text>
        </View>
      )} />
    </View>
  )
}