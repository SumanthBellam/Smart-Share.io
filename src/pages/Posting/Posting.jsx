import React, { useState } from 'react';
import Modal from './Modal';



const Posting = () => {
  const [activeTab, setActiveTab] = useState('Drafts'); // sets default tab to drafts, creates function (setActiveTab) to update activeTab
  const [isModalOpen, setIsModalOpen] = useState(false); // sets modal to closed
  const [currentPost, setCurrentPost] = useState(''); // initializes currentPost to empty
  const [modalIndex, setModalIndex] = useState(null);

  // dummy data
  const [postingData, setPostingData] = useState({
    Drafts: [
      { title: 'Post D1', images: ['image1.jpg'], description: 'Half-eaten box of chocolates', tags: ['North'] },
      { title: 'Post D2', images: ['image2.jpg'], description: 'Unopened tissue box', tags: ['West'] },
      { title: 'Post D3', images: ['image3.jpg'], description: 'Annotated copy of Frankenstein', tags: ['North', 'West'] },
    ],
    Active: [
      { title: 'Post A1', images: ['image4.jpg'], description: 'Ergonomic chair, brand new', tags: ['North'] },
      { title: 'Post A2', images: ['image5.jpg'], description: 'Standing desk, good condition', tags: ['West', 'North'] },
      { title: 'Post A3', images: ['image6.jpg'], description: 'Used toothbrush', tags: [] },
    ],
  });

  const openModal = (post, index) => { // is run when a posting's edit button is clicked
    setModalIndex(index);
    setCurrentPost(post); // updates currentPost with the details of the selected post
    setIsModalOpen(true); // opens modal
  };

  const handleSavePosting = (updatedPost) => { // is run when modal is closed
    // update postingData with updatedPost
    const updatedPostingData = { ...postingData };
    updatedPostingData[activeTab][modalIndex] = updatedPost;
    setPostingData(updatedPostingData);
    setIsModalOpen(false);
    
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl text-center">Postings</h1>
      <div className="tabs">
        <a 
          className={`tab tab-lifted ${activeTab === 'Drafts' ? 'tab-active' : ''}`} // applies daisyUI's tab-active if Drafts is the active tab 
          onClick={() => setActiveTab('Drafts')} // sets activeTab to Drafts if clicked
        >
          Drafts
        </a>
        <a 
          className={`tab tab-lifted ${activeTab === 'Active' ? 'tab-active' : ''}`} 
          onClick={() => setActiveTab('Active')}
        >
          Active
        </a>
      </div>

      <div className="mt-5">
        <h2 className="text-lg font-bold">{activeTab}</h2>
        <ul className="list-disc pl-5">
          {postingData[activeTab].map((post, index) => ( // retrieves data from postingData
            <li key={index} className="flex flex-col justify-between items-start">
              <h3 className="font-bold">{post.title}</h3>
              <button 
                className="btn btn-sm" 
                onClick={() => openModal(post)}
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        post={currentPost} 
        onSave={handleSavePosting} // runs handleSavePosting() when modal is closed
      />
    </div>
  )
}

export default Posting