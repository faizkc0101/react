import React, { useEffect, useState } from 'react'
import './Gallery.css'


function Gallery() {
  const [images,setImage]=useState([])

  useEffect(()=>{
    const fetchImages =()=>{
      const data=[
        {
          id:1,
          url:'http://picsum.photos/id/1/300/200',
          title:'image 1'
        },
        {
          id:2,
          url:'http://picsum.photos/id/1/300/200',
          title:'image 2'
        },
        {
          id:3,
          url:'http://picsum.photos/id/1/300/200',
          title:'image 3'
        },
        {
          id:4,
          url:'http://picsum.photos/id/1/300/200',
          title:'image 4'
        },
        {
          id:1,
          url:'http://picsum.photos/id/1/300/200',
          title:'image 1'
        },
        {
          id:1,
          url:'http://picsum.photos/id/1/300/200',
          title:'image 1'
        },
      ]
      setImage(data)
  

    }
   fetchImages()
  },[])
 const handleDeleteImage=(id)=>{
   setImage(images.filter((image)=>image.id !== id))

 }
  return (
    <div>
     <h1 className='title'>image gallery</h1>
     {
      images.length >0 ?
      (
        <div className='image-grid'>
        {
          images.map((image)=>(
            <div className='image-card' key={image.id}>
               <img src={image.url} alt=''></img>
                <div className='image-details'>
                  <h3>{image.title}</h3>
                  <button onClick={()=>handleDeleteImage(image.id)}>Delete</button>
                </div>
        
              </div>
  
          ))
                
  
        }
      </div>
      ):<p>no image</p>
     }
    </div>
  )
}

export default Gallery
