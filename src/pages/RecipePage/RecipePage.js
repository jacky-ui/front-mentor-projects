import useSetBodyClass from '../../utils/SetBodyClass';
import useSetTitle from '../../utils/SetTitle';
import recipeImage from '../../assets/images/image-omelette.jpeg';
import './RecipePage.scss';

function RecipePage() {
    useSetBodyClass("rpBody");
    useSetTitle("Frontend Mentor | Recipe Page");
    return(
        <article className='rpContain'>
        
        </article>
    )
};

export default RecipePage;