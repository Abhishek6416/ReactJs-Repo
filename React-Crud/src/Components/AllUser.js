import React from 'react'
import { useState ,useEffect} from 'react'
import { Table,TableHead,TableBody,TableRow,TableCell,styled } from '@mui/material'
import { getuser } from './apiService/api'


// const Tebble=styled(Table)`
// width:90%;
// margin:1% auto 0 auto;
// `

export default function AllUser() {
    const [users,setUsers]=useState([])

    useEffect(()=>{

        getuserdetails()
    },[])
  
    const getuserdetails =async() => {

        let response=await getuser();
        
        console.log(response)
        setUsers(response.data)
        
    }


  return (
    <div>

    <Table>
    <TableHead>
     <TableRow>
    <TableCell>ID</TableCell>
    <TableCell>Name</TableCell>
    <TableCell>Username</TableCell>
    <TableCell>Email</TableCell>
    <TableCell>Phone</TableCell>

</TableRow>
</TableHead>
<TableBody>
{

    users.map(elem =>(
        <TableRow>
        <TableCell>{elem.id}</TableCell>
    <TableCell>{elem.name}</TableCell>
    <TableCell>{elem.username}</TableCell>
    <TableCell>{elem.email}</TableCell>
    <TableCell>{elem.phone}</TableCell>


        </TableRow>



    ))
}




</TableBody>





    </Table>



    </div>
  )
}
