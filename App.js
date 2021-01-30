import React, { useState,useEffect } from 'react';
import {
  Text,
  View,
  Button,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';

let queen = [
  {
    img1:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNXwTb5z0NlcwU8kaSIeV1DOmZtPgadUZiBA&usqp=CAU',
    name: 'James',
    txt: '3 days ago',
  },
  {
    img1:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQaIBGjQXotQNadmFrvhZK60-VSBHwAIcdCQ&usqp=CAU',
    name: 'Steve',
    txt: '5 days ago',
  },
  {
    img1:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO06pOmBndDO0isERXC_9xx43Y3YB7rDDnBg&usqp=CAU',
    name: 'Bob',
    txt: '4 days ago',
  },
  {
    img1:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxgnA7-hYNCoWrwQ06oJNZIeu42d-hndUqMg&usqp=CAU',
    name: 'Ricky',
    txt: '2 days ago',
  },
  {
    img1:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKqGgDU7ueNdtCwqFcr4DgsNkfnKBHt-4-g&usqp=CAU',
    name: 'Carter',
    txt: '7 days ago',
  },
  {
    img1:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSle7CIpf_CtDpxbNkuKQHIJxRuXWlNMTv1lw&usqp=CAU',
    name: 'Shane',
    txt: '6 days ago',
  },
];

export default function App() {
  
  const[numColumns,setNumcolumns]=useState(1);
  const [count, setCount] = useState(2);
  const[grid,setGrid]=useState(false);
  const[title,setTitle]=useState(' SHOW GRID');
  const screenWidth = Dimensions.get("window").width;
  const tileSize = screenWidth / numColumns;

function check(){
  setCount(count+1);
if(count%2==0)
{
setGrid(false);
setTitle('SHOW GRID');
setNumcolumns(1);
} else{
  setGrid(true);
  setTitle('SHOW LIST');
  setNumcolumns(2);
} 

}


  return (
    <View style={{backgroundColor:'black'}}>
      <Button title={title} onPress={() => check()} />
      <FlatList
        horizontal={false}
  
 key={(grid) ? 1 : 0}
 numColumns={grid ? 2 : 1}

        data={queen}
        renderItem={({item,index})=>
             <View style={{marginTop:10}}>
            <Image
              source={{ uri: item.img1 }}
              style={{
                width: tileSize,
                height: tileSize,
                marginTop: 5,
                borderWidth: 1,
                marginLeft:5,
              }}
            />
                        <Text style={{ fontSize: 15,color:'white' }}>{item.name}</Text>

            <Text style={{ fontSize: 15,color:'white' }}>{item.txt}</Text>
          </View>
        }
        
      />
    </View>
  );
}
  