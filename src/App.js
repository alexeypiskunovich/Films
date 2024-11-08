import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import HeaderNavbar from './Components/HeaderNavbar/Header';
import theme from './theme';
import ReleasesContainer from './Components/ReleasesPagination/ReleasesContainer';
import ProfileMoviesContainer from './Components/ProfileMovies/ProfileMoviesContainer';
import MyFavoriteMovies from './Components/ProfileMovies/Favority/MyFavoriteMovies';


const App = () => {
  return (
    <div >
      
     <HeaderNavbar/>

     
     <Routes>
     <Route path="/" element={<Navigate to="/releases" replace />} />
      <Route path="/releases" element={<ReleasesContainer/>}/>
      <Route path="/profilemovies/:userId?" element={<ProfileMoviesContainer/>}/>
      <Route path="/myFavorite" element={<MyFavoriteMovies />} /> 
      </Routes>
     
    </div>
  );
}

export default App;

// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

// const MainPage = () => {
//     return (
//         <div>
//             {/* Заголовок страницы */}
//             <AppBar  color="grey" position="static">
//                 <Toolbar >
//                     <Typography variant="h6">Мой Приложение</Typography>
//                     <Button color="inherit" style={{ marginLeft: 'auto' }}>Войти</Button>
//                 </Toolbar>
//             </AppBar>

//             {/* Основное содержимое страницы */}
//             <Container style={{ marginTop: '20px' }}>
//                 <Typography variant="h4" gutterBottom>
//                     Добро пожаловать на главную страницу!
//                 </Typography>
//                 <Grid container spacing={3}>
//                     {/* Карточки */}
//                     {Array.from({ length: 12 }).map((_, index) => (
//                         <Grid item xs={6} sm={4} md={2} key={index}>
//                             <Card>
//                                 <CardMedia
//                                     component="img"
//                                     height="300"
//                                     image="https://via.placeholder.com/150"
//                                     alt="Placeholder"
//                                 />
//                                 <CardContent>
//                                     <Typography variant="h5">Карточка {index + 1}</Typography>
//                                     <Typography variant="body2" color="text.secondary">
//                                         Описание карточки.
//                                     </Typography>
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Container>
//         </div>
//     );
// };

// export default MainPage;

