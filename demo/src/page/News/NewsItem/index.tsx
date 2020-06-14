import React, { FC } from 'react';
export interface ItemProps{
    title: string;
    description: string;
    imgLink: string;
}
export const NewsItem: FC<ItemProps> = (props)=>{
    const {
        title,
        description,
        imgLink
    } = props;
    return (
        <div id = "news-item-main-div">
            <img className = "news-item-img" src={ imgLink } alt={ imgLink }/>
            <div className = "news-item-content">
                <p className = "news-item-category">{ title }</p>
                <p className = "news-item-description" >{ description }</p>
            </div>
        </div>
    )
}

export default NewsItem;