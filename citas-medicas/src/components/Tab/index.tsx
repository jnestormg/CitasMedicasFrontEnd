import React, { useState } from 'react';
import { Tab, Tabs, Box, Typography } from '@mui/material';
import Form_Medico from '../form-medicos';
import TablaMedicos from '../tabla-medicos';
import Horarios from '../Horarios';

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const MaterialTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="tabs example" centered>
        <Tab label="Agregar" />
        <Tab label="Asignar horario" />
        <Tab label="Mostrar" />

      </Tabs>

      <TabPanel value={value} index={0}>
        <Form_Medico />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Horarios/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TablaMedicos />
      </TabPanel>

    </Box>
  );
};

export default MaterialTabs;
