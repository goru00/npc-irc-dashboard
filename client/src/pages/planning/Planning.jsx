import {
  Box, CardContent, Container, Grid, Card, Typography, Button, Divider, Stack,
} from '@mui/material';
import React from 'react';
import Sheet from '../../components/sheet/Sheet';

const listData = {
  header: [
    { field: 'col1', text: 'Субъект РФ' },
  ],
  body: [
    { col1: 'Алтайский край' },
    { col1: 'Краснодарский край' },
    { col1: 'Приморский край' },
  ],
};

const tableData = {
  header: [
    {
      field: '',
      componentType: 'Column',
      text: 'Организация-исполнитель',
      columns: [
        { field: 'naim_org', text: 'Наименование' },
        { field: 'adr_fact', text: 'Местонахождение' },
        { field: 'inn', text: 'ИНН' },
      ],
    },
    {
      field: '',
      componentType: 'Column',
      text: 'Плазма свежезамороженная',
      columns: [
        { field: 'plazma_max', text: 'Плазма макс.' },
        { field: 'plazma_cena', text: 'Плазма цена' },
      ],
    },
    {
      field: '',
      componentType: 'Column',
      text: 'Эритроцитная масса',
      columns: [
        { field: 'erm_max', text: 'Эр масса макс' },
        { field: 'erm_cena', text: 'Эр масса цена' },
      ],
    },
    {
      field: '',
      componentType: 'Column',
      text: 'Иммуноглобулин человека',
      columns: [
        { field: 'immg_max', text: 'Им макс' },
        { field: 'immg_cena', text: 'Им цена' },
      ],
    },
    {
      field: '',
      componentType: 'Column',
      text: 'Альбумин человека',
      columns: [
        { field: 'alb_max', text: 'Альб макс' },
        { field: 'alb_cena', text: 'Альб цена' },
      ],
    },
  ],
  body: [
    { col1: 'Алтайский край', col2: 'Что-то' },
  ],
};

function Planning() {
  return (
    <div>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container
          maxWidth={false}
        >
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              lg={12}
              sm={12}
              xl={12}
              xs={12}
            >
              <Card
                sx={{ height: '100%', backgroundColor: '#EBFFFF', border: 'solid 1px #BEE5ED' }}
              >
                <CardContent>
                  <Grid
                    container
                    spacing={1}
                    sx={{
                      justifyContent: 'space-between',
                    }}
                  >
                    <Grid
                      item
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#447D8E',
                        }}
                      >
                        Форма МПЭ-1гем - Номенклатура продукции и возможности подведомственных орг.
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: '#447D8E',
                        }}
                      >
                        Слева - список субъектов РФ, справа - перечень организаций этого субъекта
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              lg={4}
              sm={4}
              xl={2}
              xs={12}
            >
              <Card>
                <Sheet data={listData} selectable={false} />
              </Card>
            </Grid>
            <Grid
              item
              lg={8}
              sm={8}
              xl={10}
              xs={12}
            >
              <Card>
                <CardContent>
                  <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={1}
                  >
                    <Button variant="contained" sx={{ background: '#358BC9', border: 'solid 1px #287AB5' }}>Добавить</Button>
                    <Button variant="contained" sx={{ background: '#358BC9', border: 'solid 1px #287AB5' }}>Удалить</Button>
                    <Button variant="contained" sx={{ background: '#358BC9', border: 'solid 1px #287AB5' }}>Сохранить</Button>
                  </Stack>
                </CardContent>
                <Divider />
                <Sheet data={tableData} />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default Planning;
