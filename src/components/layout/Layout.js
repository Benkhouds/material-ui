import {makeStyles, Drawer ,Typography,Divider, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core"
import {AppBar ,alpha, Toolbar,InputBase,Menu,MenuItem, Avatar,IconButton} from "@material-ui/core"
import AddCircleOutlineOutlined from '@material-ui/icons/AddCircleOutlineOutlined';   
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from "@material-ui/icons/Search"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import {useHistory, useLocation } from 'react-router-dom'
import { useState } from "react";
const drawerWidth= 240 
const useStyles = makeStyles((theme)=>({
    root:{
        display:"flex",
        height:"100vh"
    },
    page:{
      backgroundColor: "#f9f9f9",
      padding:theme.spacing(3),
      width:"100%"
    },
    drawer:{
        width:drawerWidth,
        
    },
    paperDrawer:{
        width:drawerWidth,
        boxShadow:'5px 0 10px 1px rgba(0,0,0,0.05)'
    },
    active:{
        background:'#f4f4f4'
    },
    title:{
        padding: theme.spacing(2)
    },
    search:{
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.secondary.main, 0.1),
        '&:hover': {
        backgroundColor: alpha(theme.palette.secondary.main, 0.2),
        },
        margin:'auto',
        width: 'fit-content'
    },
     searchIcon: {
        padding: theme.spacing(0, 1.5),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
      },
      
      input: {
        padding: theme.spacing(1),
        paddingLeft: '2.7rem',
        width: '100%', 
    },
    appBar:{
        width:`calc(100% - ${drawerWidth}px)`,
        backgroundColor: "primary"
    },
    toolbar:theme.mixins.toolbar,
    paper:{
        marginTop: "2.5rem"
    },
    listIcon:{
        minWidth:"fit-content",
        marginLeft:'1rem'
    }
}))

export default function Layout({children}) {
    const [anchorEl, setAnchorEl]= useState(null)
    const history = useHistory()
    const location = useLocation()
    const classes = useStyles();
    const menuItems=[
        {
           text:'My Notes',
           icon: <HomeIcon />,
           path:'/'
        },
        {
           text:'Create Note',
           icon: <AddCircleOutlineOutlined/>,
           path:'/create'
        }
    ]
    const handleClick= (e)=>{
        setAnchorEl(e.target)
    }
    const handleClose= ()=>{
        setAnchorEl(null)
    }
    return (
        <div className={classes.root}>
            {/* navbar */}
            <AppBar 
               className={classes.appBar}
               elevation={2}
            >
                <Toolbar>
                    <div className={classes.search}>
                        {/* <div  className={classes.searchIcon}>
                        <SearchIcon/>
                        </div> */}
                       <SearchIcon className={classes.searchIcon}/>
                       <InputBase
                          placeholder="Search..."
                          classes={{ 
                              input: classes.input
                          }}
                       />
                    </div>
                        <IconButton aria-controls="menu" style={{padding:'5px'}} onClick={handleClick}>
                            <Avatar src="/charlie.jpg" style={{cursor:"pointer"}} />
                        </IconButton>
                        <Menu 
                            classes={{
                                paper:classes.paper
                            }}
                          
                            onClose={handleClose}

                          
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            id="menu">
                            <MenuItem>
                              <ListItemText>Profile</ListItemText>
                              <ListItemIcon classes={{root:classes.listIcon}}>
                                  <AccountCircleIcon />
                              </ListItemIcon>
                              
                            </MenuItem>
                            <MenuItem>
                            <ListItemText>Logout</ListItemText>
                                <ListItemIcon classes={{root:classes.listIcon}}>
                                    <ExitToAppRoundedIcon />
                                </ListItemIcon>
                                
                            </MenuItem>
                        </Menu>
                         
                   
                </Toolbar>
            </AppBar>
            <Drawer
               className={classes.drawer}
               variant="permanent"
               anchor="left"
               classes={{paper:classes.paperDrawer}}
            >
                <Typography 
                    className={classes.title}
                    variant="h4"
                    component="h3" 
                    color="textSecondary"
                >
                    Notes
                </Typography>
                <List>
                    <Divider/>
                    {menuItems.map((item)=>(
                        <ListItem 
                            button 
                            key={item.text} 
                            onClick={()=>history.push(item.path)}
                            className={location.pathname === item.path ? classes.active :""}
                        >
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>                    
                    ))}
                    
                </List>

            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}
