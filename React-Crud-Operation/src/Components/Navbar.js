import { AppBar,Toolbar,Typography,styled } from "@mui/material";


const Header=styled(AppBar)`
background:black;
`

const Tab=styled(Typography)`
margin-right:40px;
`

const Navbar = ()=>{

    return(

        <div>

        <Header>
        <Toolbar>
        <Tab>HOME</Tab>
        <Tab>Code for</Tab>
        <Tab>All User</Tab>
     


        </Toolbar>


        </Header>


        </div>
    )


}

export default Navbar;