import React from "react";
import style from './Releases.module.css';
import { NavLink } from "react-router-dom";
import { Typography, Container, Grid, Card, CardContent, CardMedia, CircularProgress } from '@mui/material';

const Releases = ({ posters, loading }) => {
    
    const posterBaseUrl = 'http://image.tmdb.org/t/p/w342';

    return (
        <div className={style.Releases}>
            <Container style={{ marginTop: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    Latest Release
                </Typography>
                {loading ? (
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <CircularProgress sx={{ color: '#B0BEC5' }} />
                    </div>
                ) : (
                    <Grid container spacing={3}>
                        {posters.map(r => (
                            <Grid item xs={12} sm={4} md={3} key={r.id}>
                                <Card>
                                    <NavLink to={`/profilemovies/${r.id}`}>
                                        <CardMedia
                                            component="img"
                                            image={`${posterBaseUrl}${r.poster_path}`}
                                            alt={r.title}
                                        />
                                    </NavLink>
                                    <CardContent style={{ textAlign: 'center' }}>
                                        <Typography variant="h5">{r.title}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
        </div>
    );
};

export default Releases;


// import React from "react";
// import style from './Releases.module.css';
// import { NavLink } from "react-router-dom";
// import { Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

// const Releases = ({ posters }) => {
//     const posterBaseUrl = 'http://image.tmdb.org/t/p/w342'; // Базовый URL для изображений

//     return (
//         <div className={style.Releases}>
//             <Container style={{ marginTop: '20px' }}>
//                 <Typography variant="h4" gutterBottom>
//                     Latest Release
//                 </Typography>
//                 {/* <div className={style.ReleasesWord}>Latest Release</div> */}

//                 <Grid container spacing={3}>
//                     {/* Карточки */}
//                     {posters.map(r => (
//                         <Grid item xs={6} sm={4} md={2} >
//                             <Card>
                                

//                                     <NavLink key={r.id} to={`/profilemovies/${r.id}`}>

//                                         <img src={`${posterBaseUrl}${r.poster_path}`} alt={r.title} />
//                                     </NavLink>
                                
//                                 <CardContent>
//                                     <Typography variant="h5">Карточка </Typography>
//                                     <Typography variant="body2" color="text.secondary">
//                                         Описание карточки.
//                                     </Typography>
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                    ))}
//                 </Grid>
//             </Container>



//             <div className={style.MoviesPoster}>

//                 {posters.map(r => (

//                     <NavLink key={r.id} to={`/profilemovies/${r.id}`}>

//                         <img src={`${posterBaseUrl}${r.poster_path}`} alt={r.title} />
//                     </NavLink>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Releases;