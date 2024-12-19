import axios from "axios";

const BASE_URL ='https://fakestoreapi.com'

 export  const getAllProdect = async ()=>{

  const response = await axios.get(`${BASE_URL}/products`)

  return response.data;
}

export  const getProdectId = async (id)=>{

    const response = await axios.get(`${BASE_URL}/products/${id}`)
  
    return response.data;
  }

  export  const getProdectImage = async (id)=>{

    const response = await axios.get(`${BASE_URL}/products/${id}/image`)
  
    return response.data;
  }