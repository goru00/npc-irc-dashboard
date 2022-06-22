import {
  Card, CardContent, Grid, Typography,
} from '@mui/material';
import React from 'react';

function Budget(props) {
  const {
    title, score, color, variant,
  } = { ...props };
  return (
    <Card
      sx={{ height: '100%' }}
    >
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{
            justifyContent: 'space-between',
          }}
        >
          <Grid
            item
          >
            <Typography
              color="textSecondary"
              gutterBottom
              variant={variant}
            >
              {title}
            </Typography>
            <Typography
              color="textPrimary"
              variant="h4"
              sx={{
                color,
              }}
            >
              {score}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Budget;
