import React, {Component} from 'react';
import Button from './Button';
import './Story.css';
class Story extends Component {

    render() {
            const{
                title,
                url,
                author,
                num_comments,
                points,

            }= this.props.story;
            const columnss= this.props.columns;

        return (
            <div className="story" >
                <span style={{width: columnss.title.width}}>     <a href={url}>    {title} </a>   </span>
                <span style={{width: columnss.author.width}}>    {author}                         </span>
                <span style={{width: columnss.comments.width}}>  {num_comments}                   </span>
                <span style={{width: columnss.points.width}}>                     {points}        </span>
                <span style={{width: columnss.archive.width}}>
                    <Button onClick={() => this.props.onArchive}>
                        Archive
                    </Button>
                </span>
            </div>
        );
    }
}



export default Story;

