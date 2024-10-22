import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, post, onSave }) => {
    if (!isOpen) return null;

    const [updatedPost, setUpdatedPost] = useState({ ...post }); // updatedPost is initially set to a copy of post
    const [tagInput, setTagInput] = useState('');

    const handleSaveModal = () => {
        onSave(updatedPost); // runs handleSavePosting()
        onClose(); // closes the modal
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUpdatedPost((prevPost) => ({ ...prevPost, [name]: value }));
    };
  

    const addTag = () => {
        if (tagInput.trim() !== '') {
            setUpdatedPost((prevPost) => ({
                ...prevPost,
                tags: [...prevPost.tags, tagInput],
            }));
            setTagInput('');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="modal modal-open">
                <div className="modal-box">
                    <input 
                        type="text" 
                        value={updatedPost.title} 
                        onChange={handleInputChange} 
                        className="input w-full mt-2" 
                        placeholder="Title" 
                    />
                    {/* display current images */}
                    <div className="mt-2 mb-4">
                        {updatedPost.image && (
                        <img 
                            src={updatedPost.image} 
                            alt={updatedPost.title} 
                            className="w-full h-auto" 
                        />
                        )}
                    </div>
                    
                    {/* space for user to upload more images */}
                    <input 
                        type="file" 
                        accept="image/*" 
                        onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                    setUpdatedPost((prevPost) => ({ ...prevPost, image: reader.result }));
                                };
                                reader.readAsDataURL(file);
                            }
                        }} 
                        className="mt-2 mb-4" 
                    />
                    <textarea
                        name="description"
                        value={updatedPost.description}
                        onChange={handleInputChange}
                        className="textarea textarea-bordered w-full mt-4"
                        placeholder="Description"
                    />
                    {/* display current tags */}
                    <ul>
                        {updatedPost.tags.map((tag, index) => (
                            <li key={index}>{tag}</li>
                        ))}
                    </ul>

                    {/* place to enter new tags */}
                    <input
                        type="text"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        placeholder="Add tag"
                    />

                    <button onClick={addTag}>Add</button>


                    <div className="modal-action">
                        <button className="btn" onClick={handleSaveModal}>Save</button>
                        <button className="btn btn-outline" onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
        </div>
    );
};

export default Modal;