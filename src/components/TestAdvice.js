import React, { Component } from "react";
import ListItem from "./ListItem";
import style from "../style.module.css";
import TextField from '@material-ui/core/TextField'
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

class TestAdvice extends Component {
    state = {
        values: [
            { item: "TestAdvice one" },
            { item: "TestAdvice two" },
            { item: "TestAdvice three" },
            { item: "TestAdvice four" },

        ],
    };
    render() {
        return (
            <div>
                <div className={style.container}>
                    <div className={style.box1}>
                        <span className={style.header}>Test Advice</span>
                        <InfoOutlinedIcon
                            fontSize="small"
                            style={{ color: "#aaaaaa" }}
                        ></InfoOutlinedIcon>
                        <span style={{width:'255px'}}></span>
                        <span className={style.template}>Load templates</span>
                    </div>

                    <div className={style.box2}>
                        {this.state.values.map((listItem) => (
                            <ListItem item={listItem.item}></ListItem>
                        ))}
                    </div>
                    <div className={style.box3}>
                        <TextField style={{width:"500px"}} variant="outlined" label="Write Test Name">
                        </TextField>
                        <Button variant = "outlined" size="small">
                            <AddIcon fontSize="large" style={{color:"#888888"}}/>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TestAdvice;
