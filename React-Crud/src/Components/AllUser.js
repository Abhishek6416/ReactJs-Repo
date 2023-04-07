import React from 'react'
import { useState ,useEffect} from 'react'
import { Table,TableHead,TableBody,TableRow,TableCell,styled,Button } from '@mui/material'
import { getusers,deleteuser } from './apiService/api'
import { Link } from 'react-router-dom'


// const Tebble=styled(Table)`
// width:90%;
// margin:1% auto 0 auto;
// `

const Teble=styled(Table)`
width:90%;
margin:50px auto 0 auto;

`

// inside table head in html tablecell=thead
const Thead=styled(TableRow)`
background:red;
& > th{
    color:white;
    font-size:20px;
}
`
// inside table body  in html tablecell=tbody
const Tbody=styled(TableRow)`     
& > td{

    font-size:20px;
}
`

export default function AllUser() {
    const [users,setUsers]=useState([])

    useEffect(()=>{

        getuserdetails()
    },[])
  
    const getuserdetails =async() => {

        let response=await getusers();
        
        console.log(response)
        setUsers(response.data);
        
    }

    const handleDelete=async(id)=>{
        await deleteuser(id);
        getuserdetails();
}


  return (
    <div>

    <Teble>
    <TableHead>
     {/* <TableRow> */} <Thead>
    <TableCell>ID</TableCell>
    <TableCell>Name</TableCell>
    <TableCell>Username</TableCell>
    <TableCell>Email</TableCell>
    <TableCell>Phone</TableCell>
    <TableCell></TableCell>

</Thead>
</TableHead>
<TableBody>
{

    users.map(elem =>(
        <Tbody>
        <TableCell>{elem.id}</TableCell>
    <TableCell>{elem.name}</TableCell>
    <TableCell>{elem.username}</TableCell>
    <TableCell>{elem.email}</TableCell>
    <TableCell>{elem.phone}</TableCell>
    <TableCell>
        <Button variant="contained" color="secondary" style={{marginRight:"20px"}} component={Link} to={`/edit/${elem.id}`}>EDIT</Button>
        <Button variant="contained" onClick={()=>handleDelete(elem.id)}>DELETE</Button>
    </TableCell>
        </Tbody>
    ))
}
</TableBody>
   </Teble>
       </div>
  )
}
