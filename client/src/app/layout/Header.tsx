import { AppBar, Switch, Toolbar, Typography } from "@mui/material"

interface Props{
    darkMode: boolean;
    toggleDarkMode: ()=> void;
}
function Header({darkMode,toggleDarkMode}:Props) {
    return (
        <>
            <AppBar position="static" sx={{mb: 4}}>
                <Toolbar>
                    <Typography variant="h6">RE-STORE</Typography>
                    <Switch
                        checked={darkMode}
                        onChange={toggleDarkMode}
                        />
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header