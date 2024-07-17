import model from "./model";



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
   // images

  }
} = model;

export const initialValues = {
    [title.name]: '',
    [price.name]:'',
    [description.name]:'',
    [purpose.name]:'',
    [duration.name]:'',
    [includes.name]:'',
    [itinerary.name]:'',
    [recommendations.name]:'',
    [departament.name]:'',
    [city.name]:'',
    //[images.name]:'',
};
