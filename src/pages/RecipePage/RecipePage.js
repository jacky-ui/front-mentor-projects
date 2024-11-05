import useSetBodyClass from '../../utils/SetBodyClass';
import useSetTitle from '../../utils/SetTitle';
import recipeImage from '../../assets/images/image-omelette.jpeg';
import './RecipePage.scss';

function RecipePage() {
    useSetBodyClass("rpBody");
    useSetTitle("Frontend Mentor | Recipe Page");
    return(
        <section className='rpContain'>
            <section className='heading'>
                <img src={recipeImage} alt="Omelette"/>
                <h1>Simple Omelette Recipe</h1>
                <p className='heading__description'>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
            </section>
            <section className='prepContain'>
                <h2>Preparation time</h2>
                <ul className='prepContain__lists'>
                    <li><span>Total:</span> Approximately 10 minutes</li>
                    <li><span>Preparation:</span> 5 minutes</li>
                    <li><span>Cooking:</span> 5 minutes</li>
                </ul>
            </section>
        </section>
    )
};

export default RecipePage;