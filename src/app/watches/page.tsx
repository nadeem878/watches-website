import React from 'react'


const Watches = () => {

const watchData = [
  {id: 1, name: 'Rolex', Price:150, description: 'Luxury watch', image: '/rolex1.jpeg'},
  {id: 2, name: 'Smart watch disgin', Price:300, description: 'Smart watch disgin', image: '/smart watch.jpg'},
  {id: 3, name: 'Elegant timepieco', Price:150, description: 'Elegant timepieco', image: '/watch3.jpeg'},
  {id: 4, name: 'Bold and rugged', Price:200, description: 'Bold and rugged', image: '/watch4.jpeg'},
  {id: 5, name: 'Rolex', Price:150, description: 'Luxury watch', image: '/watch5.jpeg'},
  {id: 6, name: 'Rolex', Price:150, description: 'Luxury watch', image: '/watch6.jpeg'},

]

  return (
    <div>
      <div className="watches">
        {watchData.map((watch) => (
         <div key={watch.id} className='watch-card'>
          <img src={watch.image} alt={watch.name}/>
          <h3>{watch.name}</h3>
          <p>{watch.description}</p>
          <div className="price">${watch.Price}</div>
          <button>Add to Cart </button>
         </div>

        ))}
      </div>
    </div>
  )
}

export default Watches
