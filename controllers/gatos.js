const express = require("express");
const gatoModel = require("../model/collections/gatos.js");

const getAllGatos = async (request, response) => {
  try {
    const data = await gatoModel.find({});
    response.status(200).send({ msg: "GetAllGatos ", data });
  } catch (error) {
    console.log(error);
    response.status(500).send({ msg: "Error" });
  }
};

const createGato = async (request, response) => {
  try {
    const { body } = request;
    const data = await gatoModel.create(body);
    response.status(201).send({ msg: "GAto added ", data });
  } catch (error) {
    console.log(error);
    response.status(500).send({ msg: "Error" });
  }
};

const getGato= async(request, response) => {

  try{
    const {id} = request.params;
    const data = await gatoModel.findById(id)
    data?
    response.status(200).json({msg: 'found',data})
   :
   response.status(404).json({msg: 'id Not found'})
  } catch (error){
    response.status(500).json({msg:'error:', error})
}
}
// //
// const deleteGato = async (request, response) =>{
//    try{ const {id}=
//   request.params;
//  const data = await
//  gatoModel.findByIdAndDelete (id)
//  if (data){response.status(200).json({msg: 'id Not found', data})
// }
// }catch (error){

// response.status(500).json({msg:'error'})
// }
 
// }
// //update one
// const updateGato = async (request, response)=>{
//   try{
//   const {id}=
//   request.params;
//   const {body} = request
//   const options ={new:true}
//   // options new:true =>
//     //retorna el valor nou en comptes de l'antic */
//   //https://mongosejs.com/docs/api/model.html#Model.findOneAndUpdate()
//   const data= await gatoModel.findByIdAndUpdate (id,body,options)
//   data?
//   response.status(200).json({msg:'gato updated',data})
//   :
//   response.status(404).json({msg:'id Not found'})
//   } catch (error){
//     response.status(500).json({msg:'error Updating gato:',error})

//   }
// }
// //
module.exports = { getAllGatos, createGato, getGato };
