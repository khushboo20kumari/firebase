import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { Outlet, Link } from "react-router-dom";

function Navbar() {

    return (
        <>
            {/* <AppBar sx={{ height: "60px" }}>
                <Box
                    m={1}
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                    sx={{ background: "#eeeeee" }}
                >
                </Box>

                <Button><Link to="/signup" variant="contained">Signup</Link></Button>
                <Button><Link to="/sigin" variant="contained">Sigin</Link></Button>

            </AppBar> */}

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Login Signup
                        </Typography>
                        <Button color="inherit"><Link to="/sigin" variant="contained">Sigin</Link></Button>
                        <Button color="inherit"><Link to="/signup" variant="contained">Signup</Link></Button>

                    </Toolbar>
                </AppBar>
            </Box>
            <Outlet />
        </>
    )
}
export default Navbar;



// <Box
//     m={1}
//     display="flex"
//     justifyContent="flex-end"
//     alignItems="flex-end"
//     sx={{ background: "#eeeeee" }}
// >

//     <TextField sx={{ background: "white", position: "relative", bottom: "20px", left: "15px" }} variant="outlined" label="search here......." onChange={HandleOnchange} value={search} />

//     <Button sx={{ height: "56px", m: "20px" }} variant="contained" onClick={HandleSearch}>
//         <SearchIcon />
//     </Button>

//     <DateMenu handleDropdownChange={handleDropdownChange} selectedRange={selectedRange} />

// </Box>

