import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditPost = () => {
    const [title, setTitle] = useState('');
     const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState('');

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    };

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ];

    return (
        <section className="Edit-post">
            <div className='container'>
                <h2>Edit Post</h2>
                <p className='form_error-message'>
                    This is an error message
                </p>
                <form className='form Edit-post_form'>
                    <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus />
                    <ReactQuill modules={modules} formats={formats} />
                    <input type="file" onChange={e => setThumbnail(e.target.files[0])} accept='png, jpg, jpeg' />
                    <button type="submit" className='btn primary'>Update</button>
                </form>
            </div>
        </section>
    );
};

export default EditPost;
