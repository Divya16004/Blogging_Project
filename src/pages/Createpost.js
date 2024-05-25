import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import createPostImage from '../images/createPost.jpeg';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

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

  const handleFileChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Math.random().toString(36).substr(2, 9), // Generate a random id
      title,
      description,
      thumbnail: thumbnail ? URL.createObjectURL(thumbnail) : ''
    };
    setTitle('');
    setDescription('');
    setThumbnail(null);
  };

  const styles = {
    section: {
      padding: '20px 0',
      backgroundImage: `url(${createPostImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh'
    },
    container: {
      maxWidth: '800px',
      width: '90%',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      margin: '20px',
      '@media (max-width: 768px)': {
        padding: '15px',
        margin: '15px',
      },
      '@media (max-width: 480px)': {
        padding: '10px',
        margin: '10px',
      }
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333',
      fontSize: '32px', // Increased font size for the title
      fontWeight: 'bold'
    },
    form: {
      display: 'flex',
      flexDirection: 'column'
    },
    inputText: {
      padding: '10px',
      marginBottom: '20px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '16px',
      width: '100%', // Make the title input field take full width
      boxSizing: 'border-box' // Ensure padding and border are included in the element's total width and height
    },
    inputFile: {
      marginBottom: '20px',
      fontSize: '14px',
      display: 'block',
    },
    quillContainer: {
      height: '200px',
      marginBottom: '25px',
      backgroundColor: 'white'
    },
    button: {
      padding: '10px 15px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s ease',
      backgroundColor: '#007bff',
      color: '#fff',
      alignSelf: 'center', // Center the button horizontally
      maxWidth: '200px', // Set a max width for the button
    },
    buttonHover: {
      backgroundColor: '#0056b3'
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <h2 style={styles.title}>Create Post</h2>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            style={styles.inputText}
          />
          <ReactQuill
            modules={modules}
            formats={formats}
            value={description}
            onChange={setDescription}
            style={styles.quillContainer}
          /><br></br>
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/png, image/jpeg"
            style={styles.inputFile}
          />
          <button
            type="submit"
            className="btn primary"
            style={styles.button}
            onMouseOver={e => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
            onMouseOut={e => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
          >
            Create
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
