import React, { Component } from "react";
import ListItem from "./ListItem";
import style from "../style.module.css";
import TextField from '@material-ui/core/TextField'
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

class Diagnosis extends Component {
    state = {
        item:"",
        values: [ ],
    };

    handleChange = (event) =>{
        var val = event.target.value;
        this.setState({item: val});
    }

    handleAdd=()=>{
        var values = this.state.values;
        var newValue = this.state.item;
        if(newValue!=="")
            {
                newValue = {item : newValue};
                values.push(newValue);
            
            }
        this.setState(
            {
                values: values,
            }
            
        );
        console.log(this.state.values);
        this.props.onChangeDiagnosis(this.state.values);
    }

    handleCross = item =>{
        var values = this.state.values.filter(c => c.item!== item );
        this.setState({values});
    }

    render() {
        return (
            <div>
                <div className={style.container}>
                    <div className={style.box1}>
                        <span className={style.header}>Diagnosis</span>
                        <InfoOutlinedIcon
                            fontSize="small"
                            style={{ color: "#aaaaaa" }}
                        ></InfoOutlinedIcon>
                        <span style={{width:"192px"}}></span>
                        <span className={style.template}>Load templates</span>
                    </div>

                    <div className={style.box2}>
                        {this.state.values.map((listItem) => (
                            <ListItem 
                            item={listItem.item}
                            onCrossClicked={this.handleCross}
                            ></ListItem>
                        ))}
                    </div>
                    <div className={style.box3}>
                        <TextField style={{width:"400px"}} variant="outlined" label="Write Diagnosis Point" onChange={this.handleChange}>
                        </TextField>
                        <Button variant = "outlined" size="small" onClick={this.handleAdd}>
                            <AddIcon fontSize="large" style={{color:"#888888"}}/>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Diagnosis;
