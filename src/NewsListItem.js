import React from "react";
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import NewsItemImage from "./NewsItemImage";

export default function NewsListItem({ item }) {
    return (
        <>
            <ListItem button>
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
