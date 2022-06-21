import {
  Card, CardContent, Typography, Grid, Button,
} from '@mui/material';
import React from 'react';

function InfoCard(props) {
  const {
    title, subtitle1, subtitle2, icon, btnText, btnIcon, btnVariant,
  } = { ...props };
  return (
    <Card>
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
            sx={{
              height: 240,
            }}
          >
            <Typography
              color="textPrimary"
              variant="h6"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography
              color="textPrimary"
              variant="h5"
              sx={{
                mb: 2,
              }}
            >
              {icon}
              {` ${subtitle1}`}
            </Typography>
            <Typography
              color="textSecondary"
              variant="overline"
            >
              {subtitle2}
            </Typography>
          </Grid>
        </Grid>
        <Button
          variant={btnVariant}
          startIcon={btnIcon}
          sx={{
            mt: 4,
            width: '100%',
          }}
        >
          {btnText}
        </Button>
      </CardContent>
    </Card>
  );
}

export default InfoCard;
