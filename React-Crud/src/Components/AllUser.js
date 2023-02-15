import React from 'react'
import { useState ,useEffect} from 'react'
import { Table,TableHead,TableBody,TableRow,TableCell,styled } from '@mui/material'
import { getuser } from './apiService/api'


const Tebble=styled(Table)`
width:90%;
margin:1% auto 0 auto;
`

export default function AllUser() {
    const [users,setUsers]=useState([])

    useEffect(()=>{

        getuserdetails()
    },[])
  
    const getuserdetails =async() => {

        let response=await getuser();
        
        // console.log(response)
        // setUsers(response.data)
        
    }


  return (
    <div>

    <Tebble>
<TableHead>
<TableRow>


    <TableCell>ID</TableCell>
    <TableCell>Name</TableCell>
    <TableCell>Username</TableCell>
    <TableCell>Email</TableCell>
    <TableCell>Phone</TableCell>
</TableRow>
<TableBody>
{/* {

    users.map(user =>(
        <TableRow>
        <TableCell>{user.id}</TableCell>
    <TableCell>{user.name}</TableCell>
    <TableCell>Username</TableCell>
    <TableCell>Email</TableCell>
    <TableCell>Phone</TableCell>


        </TableRow>



    ))
}
 */}



</TableBody>




</TableHead>
    </Tebble>



    </div>
  )
}
