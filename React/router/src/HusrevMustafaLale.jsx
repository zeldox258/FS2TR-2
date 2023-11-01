import { Link, useParams } from "react-router-dom";

const HusrevMustafaLale = () => {

    const { id } = useParams();

  return (
    <div>
     <Link to={'/suleymanks/' + Math.round(id*3)}>Suleyman * 3</Link>
     <h1>{Math.round(id*3)}</h1>
    </div>
  )
};

export default HusrevMustafaLale;
