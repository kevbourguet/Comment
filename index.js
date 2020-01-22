import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'

const APP = () => {
    return (
      <div className="ui container comments">
          <ApprovalCard><div><h4>Warning!z</h4>Are you sure you want to do this</div></ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
            authur="sam" 
            timeAgo="Today at 4:25PM" 
            content="Cool post"
            avatar={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
        <CommentDetail
        authur="alex" 
        timeAgo="Yesterday at 1:25PM" 
        content="Very cool"
        avatar={faker.image.avatar()}
        />
        </ApprovalCard>
        <ApprovalCard>
        <CommentDetail 
        authur="jane" 
        timeAgo="Yesderday at 12:25PM" 
        content="Nice"
        avatar={faker.image.avatar()}
        />
        </ApprovalCard>
        <ApprovalCard>
        <CommentDetail 
        authur="bob" 
        timeAgo="Yesterday at 7:00AM" 
        content="Cool"
        avatar={faker.image.avatar()}
        />
        </ApprovalCard>

      </div>
    );
};

ReactDOM.render(<APP />, document.querySelector('#root'));