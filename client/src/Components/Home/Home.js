import { Container, Grid, Grow } from "@material-ui/core";
import Form from "../Form/Form.js";
import Posts from "../Posts/Posts.js";
import { useDispatch } from "react-redux";
import { getPosts } from "../../Actions/postAction.js";
import userStyles from "./styles.js";
import React, { useEffect, useState } from "react";

export default function Home() {

    const [currentId, setCurrentId] = useState(null);
    const classes = userStyles();
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch])

    return (
        <Grow in>
            <Container>
                <Grid container justifyContent="space-between" alignitems="stretch" spacing={5} className={classes.mainContainer}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
}