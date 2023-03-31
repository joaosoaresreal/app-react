import Box from '@mui/material/Box';
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

type BaseLayoutProps = {
    children: React.ReactNode,
    appBarTitle: string
}

export default function BaseLayout({ children, appBarTitle }: BaseLayoutProps) {
    return (
        /*
        <Box
            sx={{ flexGrow: 1 }}
        >
            <AppBar >
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >

                        </IconButton>
                        <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
                            AppBar
                        </Typography>

                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </AppBar>

        </Box>
        */

        <>
            <AppBar>
                <Toolbar>
                    <Typography variant='h5' >
                        {appBarTitle}
                    </Typography>

                </Toolbar>
            </AppBar>
            <Box>
                {children}
            </Box>
        </>

    )
}