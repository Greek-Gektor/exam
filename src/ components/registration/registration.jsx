
import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {postAdded} from "../../storage/counterSlise";
import { nanoid } from '@reduxjs/toolkit'

/*import css from "./registration.module.css;*/


function Registration() {



    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch()

    const [sotr, setSotr] = useState({})









    const onTitleChanged = (e) => setTitle(e.target.value)
    const onContentChanged = (e) => setContent(e.target.value)



    const onSavePostClicked = () => {
        if (title && content) {
            setSotr({

                id:Date.now(),
                email: 'email',
                firstName: title,
                lastName: content,
                password: 'password',
                clientId: 'clientId',
                approved: true

            })
            dispatch(postAdded(sotr))

            setTitle('')
            setContent('')
            console.log(sotr)
        }
    }

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button type="button" onClick={onSavePostClicked}>
                    Save Post
                </button>
            </form>
        </section>

    );
}

export default Registration;