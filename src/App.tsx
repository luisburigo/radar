import React, {useEffect, useRef} from 'react';
import svg from './assets/20_airtransportation.svg';
import {Box, Button, Card, Grid} from "@material-ui/core";
import useAirplans from "./store/airplans";
import Canvas from "./components/Canvas";

const LINE_LENGHT = 6;

function App() {
  const {airplans, addAirplan} = useAirplans();

  function draw(context: CanvasRenderingContext2D) {
    drawCartesian(context);

    for (let airplan of airplans) {
      const image = new Image();
      image.src = svg;
      context.save();
      context.translate(500 / 2, 500 / 2);
      context.rotate(airplan.angle);
      context.drawImage(image, airplan.x, airplan.y, 20, 20);
      context.restore();
    }
  }

  function drawCartesian(context: CanvasRenderingContext2D) {
    const width = 500;
    const height = 500;

    const lineXLenght = width / LINE_LENGHT;
    const lineYLenght = height / LINE_LENGHT;

    context.translate(0, 0);
    for (let i = 0; i < LINE_LENGHT + 1; i++) {
      context.beginPath();
      context.moveTo(-width, lineXLenght * i);
      context.lineTo(width, lineXLenght * i);
      context.stroke();
      context.closePath();
    }

    for (let i = 0; i < LINE_LENGHT + 1; i++) {
      context.beginPath();
      context.moveTo(lineYLenght * i, -height);
      context.lineTo(lineYLenght * i, height);
      context.stroke();
      context.closePath();
    }
  }

  return (
      <Box width="100vw" height="100vh">
        <Grid width="100%" height="100%" container>
          <Grid xs={2} item>
            asd
          </Grid>
          <Grid xs={8} display="flex" justifyContent="center" alignItems="center" item>
            <Canvas draw={draw}/>
          </Grid>
          <Grid xs={2} item>
            <Card>
              <Button onClick={() => {
                const randomX = Math.round(Math.random() * (500 / 2));
                const randomY = Math.round(Math.random() * (500 / 2));
                addAirplan({
                  y: randomY % 0 ? -randomY : randomY,
                  x: randomX % 0 ? -randomX : randomX,
                  angle: Math.round(Math.random() * 360),
                })
              }}>
                Adicionar
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Box>
  )


}

export default App;
