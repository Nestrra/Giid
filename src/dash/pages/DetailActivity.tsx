import { useParams } from "react-router-dom"


export const DetailActivity = () => {


    const { id } = useParams();

    
    console.log(id)

  return (
    <div>DetailActivity</div>
  )
}
