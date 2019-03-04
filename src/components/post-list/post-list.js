import React from 'react';

import PostListItem from '../post-list-item';
import {ListGroup} from 'reactstrap';

import './post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = posts.filter((name) => {
        if(typeof name === 'string' || typeof name === 'number' || Array.isArray(name)){
            return name = null;
        }else{
            return name;
        }
    }).map((item) => {
        let {id, ...itemProps} = item;
 
        return (
            <li key={id} className='list-group-item'>
                <PostListItem
                 {...itemProps}
                  onDelete={() => onDelete(id)}   
                  onToggleImportant={() => onToggleImportant(id)}
                  onToggleLiked={() => onToggleLiked(id)}/>
            </li>
        )
    })

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )    
}

export default PostList;