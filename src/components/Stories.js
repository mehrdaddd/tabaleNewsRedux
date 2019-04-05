import React, {Component} from 'react';
import Story from './Story';
import './Stories.css';
const COLUMNS = {
    title: {
        label: 'Title',
        width: '40%',
    },
    author: {
        label: 'Author',
        width: '30%',
    },
    comments: {
        label: 'Comments',
        width: '10%',
    },
    points: {
        label: 'Points',
        width: '10%',
    },
    archive: {
        width: '10%',
    },
};


class Stories extends Component {

    render() {
            console.log(this.props.onArchive);
        return (
            <div className="stories">
                <StoriesHeader columns={COLUMNS}  />

                {(this.props.stories || []).map(story =>
                 <Story
                     key={story.objectID}
                     story={story}
                     columns={COLUMNS}
                     onArchive={this.props.onArchive}

                 />

                )
                }
            </div>
        );
    }
}


const StoriesHeader  = ({columns}) =>
    <div className="stories-header">
        {Object.keys(columns).map(key =>
            <span
                key={key}
                style={{ width: columns[key].width }}>
                            {columns[key].label}
                        </span>
        )}

    </div>


export default Stories;

