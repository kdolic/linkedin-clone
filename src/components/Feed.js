import React, {useEffect, useState} from 'react'
import '../css/Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventIcon from '@material-ui/icons/Event';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import InputOption from './InputOption';
import Post from './Post';
import {db} from './firebase';
import {firebaseApp} from './firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';

const Feed = () => {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("posts")
        //   .orderBy("timestamp", "desc")
          .onSnapshot((snapshot) =>
            setPosts(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
              }))
            )
          );
      }, []);
    
      const sendPost = (e) => {
        e.preventDefault();
    
        db.collection("posts").add({
          name: user.displayName,
          description: user.email,
          message: input,
          photoUrl: user.photoUrl || "",
        //   timestamp: firebaseApp.firestore.FieldValue.serverTimestamp(),
        });
    
        setInput("");
      };

    return (
        <div className='feed'>
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input 
                        type="text" 
                        placeholder='Start a post' 
                        value={input} 
                        onChange={e => setInput(e.target.value)} 
                        />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
                    <InputOption Icon={YouTubeIcon} title='Video' color='#7FC15E' />
                    <InputOption Icon={EventIcon} title='Event' color='#E7A33E' />
                    <InputOption Icon={CalendarViewDayIcon} title='Write Article' color='#FF9900' />
                </div>
            </div>

            <FlipMove>
            {posts.map(({id, data: {name, description, message, photoUrl }}) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl} 
                />
            ))}
            </FlipMove>
        </div>
    )
}

export default Feed
