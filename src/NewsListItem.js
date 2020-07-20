import React from "react";
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import NewsItemImage from "./NewsItemImage";


const useStyles = makeStyles((theme) => ({
    largeImage: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

export default function NewsListItem({ item }) {
    const classes = useStyles();

    return (
        <>
            <ListItem alignItems="flex-start">
                <NewsItemImage urlToImage={item.urlToImage}/>
                <ListItemText
                    primary={item.title}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                {item.description}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
}
