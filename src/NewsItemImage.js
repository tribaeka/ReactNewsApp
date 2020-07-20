import React from "react";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AssignmentIcon from "@material-ui/icons/Assignment";
import {makeStyles} from "@material-ui/core/styles";
import { green } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    largeImage: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
    largeIcon: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    green: {
        color: '#fff',
        backgroundColor: green[500],
    },
}));

export default function NewsItemImage({ urlToImage }) {
    const classes = useStyles();

    return (
        !!urlToImage
            ?<ListItemAvatar>
                <Avatar alt="News Image" src={urlToImage} className={classes.largeImage}/>
            </ListItemAvatar>
            :<ListItemAvatar>
                <Avatar className={[classes.largeImage, classes.green]}>
                    <AssignmentIcon className={classes.largeIcon}/>
                </Avatar>
            </ListItemAvatar>
    )
}
