import React from 'react';

const Support = () => {
  const handleSubmit = () => {
    // Fill in this when we have a backend
    console.log('Form submitted!');
  };

  return (
    <div>
        <h1>Need support? Contact us!</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" id="first-name" name="first-name" placeholder="First Name" /><br /><br />
            <input type="text" id="last-name" name="last-name" placeholder="Last Name" /><br /><br />
            <input type="email" id="email" name="email" placeholder="Email" /><br /><br />
            <textarea id="message" name="message" placeholder="Message" /><br /><br />
            <input type="submit" value="Submit" />
        </form>
    </div>
  );
};

export default Support;