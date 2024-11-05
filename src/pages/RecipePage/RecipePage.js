import useSetBodyClass from '../../utils/SetBodyClass';
import useSetTitle from '../../utils/SetTitle';
import recipeImage from '../../assets/images/image-omelette.jpeg';
import './RecipePage.scss';

function RecipePage() {
    useSetBodyClass("rpBody");
    useSetTitle("Frontend Mentor | Recipe Page");
    return(
        <article className='rpContain'>
            <img src={recipeImage} alt="Omelette"/>
            <h1>Simple Omelette Recipe</h1>
            <p></p>
        </article>
    )
};

export default RecipePage;