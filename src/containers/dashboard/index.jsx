import { useEffect,useState } from "react";
import {useAuthContext} from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import {Navbar} from '../../components/navbar/index'
import { Footer } from "../../components/footer/index";
// import { Button } from "../../components/button";
// import styled from "styled-components";
// import { theme } from "../../theme";

import React from "react";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Skeleton} from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {DemoContainer}  from '@mui/x-date-pickers/internals/demo';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { DataGrid } from '@mui/x-data-grid';
import { TextField } from '@mui/material';
import { purple } from '@mui/material/colors';
import api from '../../api/axios'

const drawerWidth = 240;


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'date_time', headerName: 'Date', width: 250 },
  // { field: 'Supprimer', headerName: 'Supprimer', width: 250 },
 
];

// const rows = [
//   { id: 1, Date: 'Snow'},
//   { id: 2, Date: 'Lannister' },
//   { id: 3, Date: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, Date: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, Date: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, Date: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, Date: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, Date: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, Date: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
})); 



  


export function  Dashboard(props)  {
    const {user,getUser,logout} = useAuthContext();
    // const navigate = useNavigate();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [selectedDateTime, setSelectedDateTime] = useState(null);
    // const [rendez_vous,setRendezVous] = useState([]);
    const [rend_vous_by_iduser,setRendezVousByIdUser] = useState([]);
    // const [date_time,setDateTime] = useState('');
    const [errors,setErrors] = useState([]);

    
    //user
    useEffect(()=>{
        if(!user){
            getUser();
        }
    },[]);

    //rendez_vous
    useEffect(() => {
      // fetchRendezVous();
      fetchRendezVousByIdUser();
     
  }, []);

  // const fetchRendezVous = async() =>{
  //   await api.get('/api/data')
  //   .then(({data})=>{
  //     setRendezVous(data)
  //   })
  // }

  const userId = user ? user.id : null;
  console.log(userId)

  const fetchRendezVousByIdUser = async() =>{
    await api.get(`/api/data/${userId}`)
    .then(({data})=>{
      setRendezVousByIdUser(data)
    })
    .catch(({response:{data}})=>{
          console.log(data.message)
        })
  }

  const deleteRendezVous = async(id)=>{
    await api.delete('/api/data/'+id)
    .then(({data})=>{
      console.log(data.message)
      fetchRendezVousByIdUser();
    }).catch(({response:{data}})=>{
      console.log(data.message)
    })
  }

    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };

    const handleDateTimeChange = (newValue) => {
      setSelectedDateTime(newValue);
    };


    const handleSubmit = async () => {
      // Access the selected date and time value
  
      const data = {
        date_time: selectedDateTime.$d,
      };

      
      console.log(data)
      // console.log(data)
      try{
      await api.post('/api/save', data)
      setSelectedDateTime(null)

      }catch(e){
        console.log(e);
              if(e.response.status === 422){
            setErrors(e.response.data.errors)
          }
      }
      //   .then(response => {
      //   // Handle the response if needed
      //  console.log(response.data)
      //   })
      //   .catch(error => {
      // // Handle the error if needed
      //   });
      
      // Make your Axios POST request or perform other actions

    };


    

    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          Rev-App
          
        </Typography>
        <Divider />
        <List>
              <ListItemButton onClick={logout}  sx={{ textAlign: 'center' }}>
                Logout
              </ListItemButton>
        </List>
      </Box>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
      <>
      {user ? (
        <>
        <div >

          {/* //navbar */}
          <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <ThemeProvider theme={darkTheme}>
            <AppBar component="nav"  color="primary" >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: 'none' } }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{color: '#EEE6D8', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                  Rev-App
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  {/* {navItems.map((item) => ( */}
                  <Button  sx={{ color: '#6a2c70' }}>
                      {user?.name} 
                       
                    </Button>
                    <Button  onClick={logout} sx={{ color: '#EEE6D8' }}>
                      Logout
                    </Button>
                  {/* ))} */}
                </Box>
              </Toolbar>
            </AppBar>
            </ThemeProvider>
            <Box component="nav">
              <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: 'block', sm: 'none' },
                  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
              >
                {drawer}
              </Drawer>
          </Box>


            {/* //body */}
            {/* //galendrier */}
            
            <Box component="main" sx={{ p: 3 }}>
              <Toolbar />
              <Typography>
              
              <br></br>
              <br></br>

              <p><b>Déterminez la date et le temps de votre rendez vous</b>  {user?.id} {user?.name}</p> 
              <br></br>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateTimePicker']}>
                  <DateTimePicker
                   label="La date et le temps"
                   renderInput={(props) => <TextField {...props} />}
                   value={selectedDateTime}
                   name='date_time'
                   onChange={handleDateTimeChange} />
                </DemoContainer>
              </LocalizationProvider>
              </Typography>
              <br/>
              {/* {errors.date_time[0]} */}
              <ColorButton onClick={handleSubmit} variant="contained">Entrer</ColorButton>
            </Box>
            <Box sx={3}>  </Box>
          </Box>

          {/* //table of rendez vous */}
          <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={3}>
              <Grid  item xs>
                
              </Grid>
              <Grid item xs={5}>
                <Item>
                  <div  style={{ height: 400, width: '100%' }}>
                    <DataGrid
                      rows={rend_vous_by_iduser}
                      columns={columns}
                      initialState=
                      {{
                        pagination: {
                          paginationModel: { page: 0, pageSize: 5 },
                        },
                      }}
                      pageSizeOptions={[5, 10]}
                      checkboxSelection
                    />
                  </div> 
                </Item>
              </Grid>
              <Grid item xs>
              
              </Grid>
            </Grid>
          </Box>

        </div>
      </>
        ):(
          
          <>
            <ThemeProvider theme={darkTheme}>
          <AppBar component="nav"  color="primary" >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{color: '#EEE6D8', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                Rev-App
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {/* {navItems.map((item) => ( */}
                <Button  sx={{ color: '#6a2c70' }}>
                    {user?.name} 
                     
                  </Button>
                  {/* <Button  onClick={logout} sx={{ color: '#EEE6D8' }}>
                    Logout
                  </Button> */}
                {/* ))} */}
              </Box>
            </Toolbar>
          </AppBar>
          </ThemeProvider>
         
          <p>loading...</p>
         <br></br>
         <br></br>
         <br></br>
        
         {/* <Box sx={{ display: 'flex', alignItems: 'center' }}> */}
         <Box >
          <Box sx={{ p: 3 }} >
          <Skeleton  animation="wave" width="35%"/>
           <Typography variant="h1"><Skeleton animation="wave" width="35%"/></Typography>
           <Typography variant="h1"><Skeleton animation="wave" width="25%"/></Typography>
          </Box>
          
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <Grid  item xs>
                
              </Grid>
              <Grid item xs={5}>
                <Item>
                  <Skeleton variant="rectangular" width="100%" animation="wave">
                    <div style={{ paddingTop: '57%' }} />
                    </Skeleton>
                    
            </Item>
            
             </Grid>
              <Grid item xs>
              </Grid>
            </Grid>
          </Box>
          {/* <Skeleton  animation="wave" width="100%"/>
          <Skeleton  animation="wave" width="100%"/> */}
           
          </Box>
          <br></br>
         <br></br>
         <br></br>
          {/* </Box> */}
          </>
        )}
      <Footer />
        </>
       
    );
};
Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


