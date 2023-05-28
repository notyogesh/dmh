import React from "react";
// import PropTypes from 'prop-types';

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
            //  backgroundColor: "#444"
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
