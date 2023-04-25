import FullPost from "../components/FullPost";

import { useParams } from "react-router-dom";

const DetailView = () => {
   
    const { id } = useParams();

    return (
        <div>
            <FullPost id = {id} />
            {console.log('fron detailviews')}
        </div>
    )
};

export default DetailView;