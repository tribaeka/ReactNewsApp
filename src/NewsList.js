import React from "react";
import NewsListItem from "./NewsListItem";
import List from '@material-ui/core/List';


export default function NewsList({ newsList }) {
    return (
        <List>
            { newsList.map((newsItem, index) => {
                return <NewsListItem item={newsItem} key={index}/>
            })}
        </List>
    )
}
