import {
  Box, CardContent, Container, Grid, Card, Typography, Button, Divider, Stack, TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Sheet from '../../components/sheet/Sheet';
import r1022Service from '../../services/r1022.service';

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
    { alb_max: 'Алтайский край', adr_fact: 'Что-то' },
  ],
};

function Planning() {
  const [listData, setListData] = useState({
    header: [
      { field: 'col1', text: 'Субъект РФ' },
    ],
    body: [],
  });
  useEffect(() => {
    r1022Service.get().then((res) => {
      // eslint-disable-next-line prefer-const
      let newList = { ...listData };
      if (res.data) {
        res.data.dataDtos.forEach((item) => {
          newList.body.push({
            col1: item.p01,
          });
        });
        setListData(newList);
      }
    });
  }, []);

  const handleSearch = (e) => {
    // eslint-disable-next-line prefer-const
    let newList = { ...listData };
    newList.body = [];
    if (e.target.value) {
      r1022Service.getByFiltered(e.target.value).then((res) => {
        if (res.data) {
          res.data.dataDtos.forEach((item) => {
            newList.body.push({
              col1: item.p01,
            });
          });
          setListData(newList);
        }
      });
    } else {
      r1022Service.get().then((res) => {
        if (res.data) {
          res.data.dataDtos.forEach((item) => {
            newList.body.push({
              col1: item.p01,
            });
          });
          setListData(newList);
        }
      });
    }
  };

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
              xl={3}
              xs={12}
            >
              <Card>
                <CardContent>
                  <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    justifyContent="flex-start"
                  >
                    <TextField
                      id="outlined-required"
                      label="Поиск субъекта"
                      defaultValue=""
                      onChange={(e) => handleSearch(e)}
                      sx={{
                        width: '100%',
                      }}
                    />
                  </Stack>
                </CardContent>
                { listData.body.length && (
                  <Sheet
                    data={listData}
                    selectable={false}
                  />
                )}
              </Card>
            </Grid>
            <Grid
              item
              lg={8}
              sm={8}
              xl={9}
              xs={12}
            >
              <Card>
                <CardContent>
                  <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={1}
                    sx={{
                      mb: 4,
                    }}
                  >
                    <Button variant="contained" sx={{ background: '#358BC9', border: 'solid 1px #287AB5' }}>Добавить</Button>
                    <Button variant="contained" sx={{ background: '#358BC9', border: 'solid 1px #287AB5' }}>Удалить</Button>
                    <Button variant="contained" sx={{ background: '#358BC9', border: 'solid 1px #287AB5' }}>Сохранить</Button>
                  </Stack>
                  <Sheet data={tableData} />
                </CardContent>
                <Divider />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default Planning;
