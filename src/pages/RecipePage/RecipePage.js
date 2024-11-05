import useSetBodyClass from '../../utils/SetBodyClass';
import useSetTitle from '../../utils/SetTitle';
import recipeImage from '../../assets/images/image-omelette.jpeg';
import Divider from '../../components/Divider/Divider';
import './RecipePage.scss';

function RecipePage() {
    useSetBodyClass("rpBody");
    useSetTitle("Frontend Mentor | Recipe Page");
    return(
        <main className='rpContain'>
            <section className='heading'>
                <img src={recipeImage} alt="Omelette"/>
                <h1>Simple Omelette Recipe</h1>
                <p className='heading__description'>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
            </section>
            <section className='prepContain'>
                <h2>Preparation time</h2>
                <ul className='prepContain__lists'>
                    <li><span className='list--spacing'><span>Total:</span> Approximately 10 minutes</span></li>
                    <li><span className='list--spacing'><span>Preparation:</span> 5 minutes</span></li>
                    <li><span className='list--spacing'><span>Cooking:</span> 5 minutes</span></li>
                </ul>
            </section>
            <section className='ingredients'>
                <h2>Ingredients</h2>
                <ul>
                    <li><span className='list--spacing'>2-3 large eggs</span></li>
                    <li><span className='list--spacing'>Salt, to taste</span></li>
                    <li><span className='list--spacing'>Pepper, to taste</span></li>
                    <li><span className='list--spacing'>1 tablespoon of butter or oil</span></li>
                    <li><span className='list--spacing'>Optional fillings: cheese, diced vegetables, cooked meats, herbs</span></li>
                </ul>
            </section>
            <Divider spanClass='divider'/>
            <section className='instructions'>
                <h2>Instructions</h2>
                <ol>
                    <li><span className='list--spacing'><span>Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</span></li>
                    <li><span className='list--spacing'><span>Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil.</span></li>
                    <li><span className='list--spacing'><span>Cook the omelette:</span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</span></li>
                    <li><span className='list--spacing'><span>Add fillings (optional):</span> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</span></li>
                    <li><span className='list--spacing'><span>Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</span></li>
                    <li><span className='list--spacing'><span>Enjoy:</span> Serve hot, with additional salt and pepper if needed.</span></li>
                </ol>
            </section>
        </main>
    )
};

export default RecipePage;