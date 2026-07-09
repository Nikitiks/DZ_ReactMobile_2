import { View, Text, TextInput, Button, FlatList, Alert } from "react-native";
import { useState } from "react";

interface Task{
    id:string,
    title:string,
    description:string
}



const Tasks=()=>{

    const [task,setTask] = useState<Task>({
        id:"",
        title:"",
        description:""
    }
    )
    const [tasks,setTasks] = useState<Task[]>([])


    const handleAddTask=()=>{
        if(!task.title.trim()){
            return Alert.alert("Warning","Title is empty",[{text:"Ok"}]);
        }
        if(!task.description.trim()){
            return Alert.alert("Warning","Description is empty",[{text:"Ok"}]);
        }

        const newTask:Task = {
            id:Date.now().toString(),
            title:task.title,
            description:task.description
        }


        setTasks((prev:Task[])=>[...prev, newTask])

        setTask({
            id:'',
            title:"",
            description:""
        })

    }


    return(
        <View style={{ padding: 20 }}>
            <Text style={{fontWeight:"bold"}}>Title: </Text>
            <TextInput style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} value={task.title} onChangeText={(t)=>setTask((prev)=>({...prev, title:t}))} placeholder="Enter title..."></TextInput>

            <Text style={{fontWeight:"bold"}}>Description: </Text>
            <TextInput style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} value={task.description} onChangeText={(t)=>setTask((prev)=>({...prev, description:t}))} placeholder="Enter description..."></TextInput>

            <Button title="Add task" onPress={()=>handleAddTask()}/>


            <FlatList style={{padding:10}} data={tasks} keyExtractor={(item)=> item.id} renderItem={({item})=>(
                <View style={{padding:3,marginBottom:5,borderStyle:"solid",borderWidth:2}}>
                    <Text style={{fontWeight:"bold"}}>Title: {item.title}</Text>
                    <Text>Description: {item.description}</Text>
                </View>
            )
            } />
        </View>

    );
};

export default Tasks;