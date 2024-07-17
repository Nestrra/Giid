import model from "./model";
import * as Yup from 'yup';

const {
    formField: {
      title,
      price,
      description,
      purpose,
      duration,
      includes,
      itinerary,
      recommendations,
      departament,
      city,
      //images
  
    }
  } = model;


  export const validations = {
    validationShema: Yup.object().shape({
        [title.name]: Yup.string().max(40, 'El campo no puede superar los 40 caracteres').required(`${title.requiredErrorMsg}`),
        [price.name]:  Yup.string()
        .max(21, 'No puede superar los 17 digitos  ' )
        .required(`${price.requiredErrorMsg}`),
        [description.name]: Yup.string().max(140, 'El campo no puede superar los 140 caracteres').required(`${description.requiredErrorMsg}`),
        [purpose.name]: Yup.string().required(`${purpose.requiredErrorMsg}`),
        [duration.name]: Yup.string().max(140, 'El campo no puede superar los 140 caracteres').required(`${duration.requiredErrorMsg}`),
        [includes.name]: Yup.string().max(140, 'El campo no puede superar los 140 caracteres').required(`${includes.requiredErrorMsg}`),
        [itinerary.name]: Yup.string().max(140, 'El campo no puede superar los 140 caracteres').required(`${itinerary.requiredErrorMsg}`),
        [recommendations.name]: Yup.string().max(140, 'El campo no puede superar los 140 caracteres').required(`${recommendations.requiredErrorMsg}`),
        [departament.name]: Yup.string().max(140, 'El campo no puede superar los 140 caracteres').required(`${departament.requiredErrorMsg}`),
        [city.name]: Yup.string().max(140, 'El campo no puede superar los 140 caracteres').required(`${city.requiredErrorMsg}`),
        //[images.name]: Yup.string().max(140, 'El campo no puede superar los 140 caracteres'),
            
      })
  }
  
  
  
  
  
 