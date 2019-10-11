import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./index.css"
import { TextField, Button, Card } from "@material-ui/core";
import {DropzoneArea} from 'material-ui-dropzone'




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  },
  h1:{
    fontSize: "30px",
    marginTop: "20px",
    marginBottom:"20px",
  },
  textfield:{
    marginBottom:"30px",
    width:"100%"
  },
  bangchon:{
    float:"right",
    marginTop: "-10px",
  },
  button:{
    padding: "10px 10px 10px 10px",
    background: "#ab47bc"
  },
  drop:{
    width:"100%",
    marginBottom:"20px"
  }
}));

const currencies = [
  {

    label: "Môi trường"
  },
  {
    
    label: "An toàn giao thông"
  },
  
];


export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  

  return (
    <div class="container" className={classes.root}>
      <h1 className={classes.h1}>AI phân loại</h1>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <p><TextField  
           variant="outlined" 
           label="nội dung phân loại" 
           className={classes.textfield}
           multiline
            rows="8"
           />
           </p>
          <Button className={classes.button} >Phân loại</Button>
          <TextField
      id="check"
      className={classes.bangchon}    
      id="filled-select-currency-native"
      select
      label="Lựa chọn phân loại"     
      SelectProps={{
        native: true
      }}
      helperText="Vui lòng điền đầy đủ thông tin"
      margin="normal"
      variant="filled"
    >
      {currencies.map(option => (
        <option>
          {option.label}
        </option>
      ))}
    </TextField>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <p className = {classes.drop}><DropzoneArea 
        
        // onChange={this.handleChange.bind(this)}
        /></p>
        <Button className={classes.button} >Phân loại</Button>
          <TextField
      id="check"
      className={classes.bangchon}    
      id="filled-select-currency-native"
      select
      label="Lựa chọn phân loại"     
      SelectProps={{
        native: true
      }}
      helperText="Vui lòng điền đầy đủ thông tin"
      margin="normal"
      variant="filled"
    >
      {currencies.map(option => (
        <option>
          {option.label}
        </option>
      ))}
    </TextField>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
