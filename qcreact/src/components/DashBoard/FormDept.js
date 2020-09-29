import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles({
    root: {
        maxWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function FormDept() {
    const classes = useStyles();

    return (
        
        <Card className={classes.root} >
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Choose the department below
                </Typography>
            </CardContent>
            <CardActions>
                <ButtonGroup
                    orientation="vertical"
                    color="#546e7a"
                    aria-label="vertical contained primary button group"
                    variant="contained"
                >
                    <Button size="small">General Laboratory</Button>
                    <Button size="small">Blood Bank</Button>
                    <Button size="small">Hematology</Button>
                    <Button size="small">Clinical Chemistry</Button>
                    <Button size="small">Microbiology</Button>
                </ButtonGroup>
            </CardActions>
        </Card>
    );
}
