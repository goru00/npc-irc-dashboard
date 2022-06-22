import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
} from '@mui/material';
import FactoryIcon from '@mui/icons-material/Factory';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Budget from '../../components/dashboard/Buget';
import InfoCard from '../../components/dashboard/InfoCard';
import Sheet from '../../components/sheet/Sheet';

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

const staticBudget = [
  {
    score: '27 %',
    title: 'ГОТОВНОСТЬ К ВЫПОЛНЕНИЮ МОБИЛИЗАЦИОННЫХ ЗАДАНИЙ',
    color: '#DB2828',
    variant: 'overline',
  },
  {
    score: '40 %',
    title: 'ОБЕСПЕЧЕННОСТЬ ПРОИЗВОДСТВЕННЫМИ МОЩНОСТЯМИ',
    color: '#F27727',
    variant: 'overline',
  },
  {
    score: '90 %',
    title: 'ОБЕСПЕЧЕННОСТЬ РАБОЧЕЙ СИЛОЙ',
    color: 'success.dark',
    variant: 'overline',
  },
];

const staticInfo = {
  title: 'Текущий объект',
  subtitle1: 'Коломенский завод',
  subtitle2: 'Основной вид деятельности: Изготовление и поставка оборудования',
  icon: (<FactoryIcon fontSize="small" />),
  btnText: 'Регистрационная информация',
  btnIcon: (<EditIcon fontSize="small" />),
  btnVariant: 'outlined',
};

const structsInfo = [
  {
    icon: (<AccountTreeIcon fontSize="small" />),
    subtitle1: 'Схема объектов и картотека организаций',
    subtitle2: 'Ведение схемы отчетности объектов мобилизационной подготовки, электронной картотеки организаций, находящиеся в ведении объектов моб.подготовки экономии',
    btnText: 'Перейти',
    btnVariant: 'contained',
  },
  {
    icon: (<DashboardIcon fontSize="small" />),
    subtitle1: 'ПДП',
    subtitle2: 'Ведение схемы отчетности объектов мобилизационной подготовки, электронной картотеки организаций, находящиеся в ведении объектов моб.подготовки экономии',
    btnText: 'Перейти',
    btnVariant: 'contained',
  },
  {
    icon: (<ContentCopyIcon fontSize="small" />),
    subtitle1: 'Реестр НПА',
    subtitle2: 'Ведение схемы отчетности объектов мобилизационной подготовки, электронной картотеки организаций, находящиеся в ведении объектов моб.подготовки экономии',
    btnText: 'Перейти',
    btnVariant: 'contained',
  },
  {
    icon: (<AccountBoxOutlinedIcon fontSize="small" />),
    subtitle1: 'Картотека граждан',
    subtitle2: 'Ведение схемы отчетности объектов мобилизационной подготовки, электронной картотеки организаций, находящиеся в ведении объектов моб.подготовки экономии',
    btnText: 'Перейти',
    btnVariant: 'contained',
  },
];

function Home() {
  return (
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
          spacing={4}
        >
          {staticBudget.map((item) => (
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
              key={item.title}
            >
              <Budget
                title={item.title}
                score={item.score}
                color={item.color}
                variant={item.variant}
              />
            </Grid>
          ))}
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <InfoCard
              title={staticInfo.title}
              subtitle1={staticInfo.subtitle1}
              subtitle2={staticInfo.subtitle2}
              icon={staticInfo.icon}
              btnText={staticInfo.btnText}
              btnIcon={staticInfo.btnIcon}
              btnVariant={staticInfo.btnVariant}
            />
          </Grid>
          {structsInfo.map((item) => (
            <Grid
              item
              key={item.subtitle1}
              lg={6}
              sm={6}
              xl={6}
              xs={12}
            >
              <InfoCard
                icon={item.icon}
                subtitle1={item.subtitle1}
                subtitle2={item.subtitle2}
                btnText={item.btnText}
                btnVariant={item.btnVariant}
              />
            </Grid>
          ))}
          <Grid
            item
            lg={12}
            sm={12}
            xl={12}
            xs={12}
          >
            <Card>
              <CardHeader
                title="Планирование поставок"
                subheader="Таблица планирования поставок"
              />
              <CardContent>
                <Sheet data={tableData} selectable={false} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
