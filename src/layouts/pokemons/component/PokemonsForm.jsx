import {useState, useEffect} from 'react';
import {useParams } from 'react-router-dom';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import usePokemons from '../../../hooks/usePokemons';

const PokemonsForm = () => {

  const { pokemonsResult, updatePokemon } = usePokemons(); /*del hook global*/
  const { _id, name, type, hp, attack, special, image } = pokemonsResult;
  const [editmode, setEditMode] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    if (id !=="") {
      setEditMode(true);
      window.scrollTo(0,0);
    }
  }, []);

  return (  
    <>
    <Formik
      initialValues={pokemonsResult}
      validationSchema = { yup.object({
        name: yup.string().required('Debe ingresar un nombre'),
        type: yup.string().required('Debe ingresar el Tipo'),
        hp: yup.number().required('El HP es requerido').positive().integer(),
        attack: yup.string().required('Debe ingresar un ataque'),
        special: yup.string().required('Debe ingresar un especial')
      })}
      onSubmit={async (values, actions) =>{
        await updatePokemon(values);
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      {({ handleSubmit, setFieldValue, isSubmitting }) => {
        return(
          <Form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-zinc-700 rounded-md w-4/5 mx-sm mx-auto p-4"
          >
            <h2 className="text-3xl text-center font-bold text-yellow-400">{editmode ? "Editar Pokemon" : "Crear Pokémon"}</h2>
            <div>
              <Field 
                name ="_id" 
                placeholder="Id" className="bg-zinc-800 rounded p-2" disabled/>    
            </div>
            <div>
              <Field name ="name" 
              placeholder="Nombre" className="bg-zinc-800 rounded p-2" required/>    
              <ErrorMessage name="name" component="span" text></ErrorMessage>
            </div>
            <div>
              <Field name ="type" 
              placeholder="Tipo" className="bg-zinc-800 rounded p-2" required/>    
              <ErrorMessage name="type" component="span"></ErrorMessage>
            </div>
            <div>
              <Field name ="hp" 
              type="number" placeholder="HP" className="bg-zinc-800 rounded p-2" required/>    
              <ErrorMessage name="hp" component="span"></ErrorMessage>
            </div>
            <div>
              <Field 
              name ="attack" placeholder="Ataque" className="bg-zinc-800 rounded p-2"/>    
              <ErrorMessage name="attack" component="span"></ErrorMessage>
            </div>
            <div>
              <Field 
              name ="special" placeholder="Especial" className="bg-zinc-800 rounded p-2"/>
              <ErrorMessage name="special" component="span"></ErrorMessage>
            </div>
            <div>
              <figure className="w-32 h-32">
                <img src={image ? image.url : ""} alt={name} className="w-full h-full object-cover" />
              </figure>
            </div>
            <input type="file" 
              name="image"
              className="bg-zinc-800 rounded p-2 text-sm cursor-pointer file:bg-white file:border-0 file:rounded file:font-semibold file:mr-2 file:p-2 hover:bg-zinc-300"
              onChange={
                (e) => setFieldValue ('image',e.currentTarget.files[0])
              }
            />    
            <button 
              type="submit" 
              className="bg-zinc-900 rounded p-2 text-sm cursor-pointer file:bg-white file:border-0 file:rounded file:font-semibold file:mr-2 file:p-2 hover:bg-zinc-300"
              disabled = {isSubmitting}
            > {isSubmitting ? "Enviando" : editmode ? "Actualizar" : "Grabar"}
            </button>
          </Form>
        )
      }}
    </Formik>
    </>
)
}
 
export default PokemonsForm;