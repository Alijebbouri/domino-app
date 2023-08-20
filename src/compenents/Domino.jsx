import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import inita from './images/init.png';
import face_1 from './images/face_1.png';
import face_2 from './images/face_2.png';
import face_3 from './images/face_3.png';
import face_4 from './images/face_4.png';
import face_5 from './images/face_5.png';
import face_6 from './images/face_6.png';

const faceImages = [inita, face_1, face_2, face_3, face_4, face_5, face_6];

function Domino(props) {
  const [face, setFace] = useState(false);
  const [nbessai, setNbessai] = useState(0);
  const [trouve, setTrouve] = useState(false);

  const play = () => {
    const valface = Math.floor(Math.random() * 6 + 1);
    setFace(valface);
    setNbessai(nbessai + 1);
    if (valface === props.valcache) {
      setTrouve(true);
    }
  };

  const init = () => {
    setFace(false);
    setNbessai(0);
    setTrouve(false);
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Card>
        <CardMedia
          component="img"
          height="290"
          width="290"  // Set the desired width here
          image={faceImages[face === false ? 0 : face]}
          alt="Inti"
          sx={{ objectFit: 'contain' }}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Jeu de Domino Caché
          </Typography>
          <Typography variant="body2" color="text.secondary">
            La face aléatoire est: {face === false ? 'N/A' : face}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Nombre d'essai: {nbessai}
          </Typography>
        </CardContent>
        <CardActions>
          {trouve ? (
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="body2" color="text.secondary">
                Bravo, vous avez trouvé la valeur cachée!
              </Typography>
              <Button variant="contained" onClick={init}>
                Réinitialiser
              </Button>
            </Box>
          ) : (
            <Button
              variant="contained"
              onClick={play}
              sx={{
                backgroundColor: 'rgb(106 195 74)',
                fontSize: 16,
              }}
            >
              Jouer
            </Button>
          )}
        </CardActions>
      </Card>
    </Container>
  );
}

export default Domino;
