import React from "react";
import  { Component } from "react";
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"
import "./index";
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#ab47bc',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#ab47bc',
      },
      '& .MuiOutlinedInput-root': {
        
        '&.Mui-focused fieldset': {
          borderColor: '#ab47bc',
        },
    }}
  })(TextField);

  const CssButton = withStyles({
    root: {
        "&": {
            marginTop:"60px",
            background:"#ab47bc",
            borderRadius:"3px",
            color:"white",
            width:"154px",
            height: "41px",
            marginLeft:"20px"
        },
        
        "&:hover": {
            background:"#ab47bc"
        }
        
      }
    })(Button);



const styles = {
  typography: {
    margin: "50px",
  },
    card:{
        backgroundColor: "#ab47bc",
        color: "white",
        marginLeft: "16px",
        marginTop: "-37px",
        width:"677px",
        height: "84px"
    },
    p:{
        color:"rgba(255,255,255,.62)",
        marginLeft:"10px",
        fontSize:"0.9em"
    },
    h4:{
        fontSize: "1.1em",
        marginTop:"13px",
        marginLeft:"10px"
    },
    card2:{
       width:"708px",
       height:"487px",
        marginTop:"50px",
        paddingTop:"50px"
    },
    TextField:{
   
        marginTop:"20px",
        width:"80%",
        marginLeft:"10%"
    },  
    grid1:{
        paddingTop:"30px",
        paddingLeft:"20px",
        paddingRight:"20px"
    }
}


class Demo extends Component {
    constructor(props) {
        super(props)
    
        this.state ={
          hoten:'',
          noidung:''
        }
        this.ht = this.ht.bind(this);
        this.nd = this.nd.bind(this);
    }           
    ht(event) {
      this.setState({hoten: event.target.value })
    }

    nd(event) { this.setState({noidung: event.target.value }) };

    render(){
        const { classes } = this.props;
        console.log(classes, 'classes')
        return(
            <div class="container">
            <Card id="card1" className ={classes.card}>
                <h4 className={classes.h4}>Phân loại</h4>
                <p className= {classes.p}>Vui lòng điền đầy đủ thông tin</p>
            </Card>
            <Card id="card2" className = {classes.card2}>
                
                <CssTextField 
                  value={this.state.hoten}
                  type="email"
                  label="Họ tên"
                  className = {classes.TextField}
                  onChange={this.ht}
                />
                <CssTextField 
                value={this.state.noidung}
                  variant="outlined"
                  label="nội dung phân loại"
                  variant="outlined" 
                label="Nội dung phân loại" 
                className={classes.TextField}
                onChange={this.nd}
                 multiline
                  rows="8"
                />

<PopupState variant="popover" popupId="demo-popup-popover">
      {popupState => (
        <div>
          <CssButton variant="contained" {...bindTrigger(popupState)} className = {classes.Button}>
          Phân loại
          </CssButton>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
          >
            <Typography className={classes.typography}><p>Nội dung phân loại của {this.state.hoten}:</p>
            <p>{this.state.noidung}</p>
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
              
            </Card>
              
            </div>
        )
    }
}

export default withStyles(styles)(Demo);