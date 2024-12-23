import React from 'react'
import { PostData } from '../../data/PostData'

// This is the home page for when you log in. It shows a grid of posts.
const Home = () => {

  const postArray = PostData

  return (
    <div>
      <h1>Feed</h1>
      <div className="grid grid-cols-3 gap-4"></div>
        {postArray.map((post) => (
          <div key={post.id} className="card bg-base-100 w-96 mb-10 shadow-xl">
            <h1>{post.title}</h1>
            <figure>
              <img src={post.picture} />
            </figure>
            <div className="card-body">
              <p>{post.description}</p>
              <p>{post.location}</p>
              <p>{post.type}</p>
            </div>
          </div>
        ))}
      </div>
  )
}

// {/*       
//       <div className="card bg-base-100 w-96 shadow-xl">
//         <figure>
//           <img
//             src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//             alt="Shoes" />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">Shoes!</h2>
//           <p>If a dog chews shoes whose shoes does he choose?</p>
//           <div className="card-actions justify-end">
//             <button className="btn btn-primary">Buy Now</button>
//           </div>
//         </div>
//       </div>*/}
//     </div> 

export default Home