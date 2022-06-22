import React from 'react';
import { SenchaGrid, Column } from '@sencha/sencha-grid';
import '@sencha/sencha-grid/dist/themes/grui.css';
import {
  Grid,
} from '@mui/material';

function Sheet(props) {
  const { data, selectable } = { ...props };
  return (
    <Grid
      container
      spacing={3}
      sx={{
        jusifyContent: 'space-between',
      }}
    >
      <Grid
        item
        sx={{
          height: 360,
          width: '100%',
        }}
      >
        <SenchaGrid
          data={data.body}
          style={{
            width: '100%',
            height: '100%',
          }}
          plugins={{
            gridcellediting: true,
          }}
          selectable={{
            checkbox: selectable,
          }}
          shadow
        >
          {data.header.map((head) => (
            head.componentType === 'Column' ? (
              <Column
                key={head.text}
                field={head.field}
                componentType={head.componentType}
                text={head.text}
              >
                {head.columns.map((column) => (
                  <Column
                    key={column.text}
                    field={column.field}
                    text={column.text}
                  />
                ))}
              </Column>
            ) : (
              <Column
                key={head.text}
                field={head.field}
                text={head.text}
              />
            )
          ))}
        </SenchaGrid>
      </Grid>
    </Grid>
  );
}

export default Sheet;
