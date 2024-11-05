import useSetBodyClass from '../../utils/SetBodyClass';
import useSetTitle from '../../utils/SetTitle';
import { recipeConstants } from '../../assets/constants/constants';
import recipeImage from '../../assets/images/image-omelette.jpeg';
import Divider from '../../components/Divider/Divider';
import OrderedList from '../../components/OrderedList/OrderedList';
import UnorderedList from '../../components/UnorderedList/UnorderedList';
import './RecipePage.scss';

function RecipePage() {
    useSetBodyClass("rpBody");
    useSetTitle("Frontend Mentor | Recipe Page");
    return(
        <>
        {recipeConstants.map((content) => (
                <main className='rpContain' key={content.title}>
                    <section className='heading'>
                        <img src={recipeImage} alt="Omelette"/>
                        <h1>{content.title}</h1>
                        <p className='heading__description'>{content.description}</p>
                    </section>
                    <section className='prepContain'>
                        <h2>Preparation time</h2>
                        <ul className='prepContain__lists'>
                            <li><span className='list--spacing'><span>Total:</span> Approximately 10 minutes</span></li>
                            <li><span className='list--spacing'><span>Preparation:</span> 5 minutes</span></li>
                            <li><span className='list--spacing'><span>Cooking:</span> 5 minutes</span></li>
                        </ul>
                    </section>
                    {content.ingredients.map((ingredient) => (
                        <section className='ingredients'>
                            <h2>{ingredient.title}</h2>
                            <UnorderedList itemList={ingredient.list}/>
                            {/*<ul>
                                <li><span className='list--spacing'>2-3 large eggs</span></li>
                                <li><span className='list--spacing'>Salt, to taste</span></li>
                                <li><span className='list--spacing'>Pepper, to taste</span></li>
                                <li><span className='list--spacing'>1 tablespoon of butter or oil</span></li>
                                <li><span className='list--spacing'>Optional fillings: cheese, diced vegetables, cooked meats, herbs</span></li>
                            </ul>*/}
                        </section>
                    ))}
                    <Divider spanClass='divider'/>
                    {content.instructions.map((instruction) => (
                        <section className='instructions' key={instruction.title}>
                            <h2>{instruction.title}</h2>
                            <OrderedList itemList={instruction.list}/>
                        </section>
                        ))}
                    <Divider spanClass='divider'/>
                    <section className='table'>
                        <table role="table" aria-label="Nutritional values per serving without additional fillings">
                            <caption>
                                Nutrition
                                <p>The table below shows nutritional values per serving without the additional fillings.</p>
                            </caption>
                            <thead>
                            <tr>
                                <th scope="col">Nutrient</th>
                                <th scope="col">Amount</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">Calories</th>
                                <td>277 kcal</td>
                            </tr>
                            <tr>
                                <th scope="row">Carbs</th>
                                <td>0 g</td>
                            </tr>
                            <tr>
                                <th scope="row">Protein</th>
                                <td>20 g</td>
                            </tr>
                            <tr>
                                <th scope="row">Fat</th>
                                <td>22 g</td>
                            </tr>
                            </tbody>
                        </table>
                    </section>
                </main>
                ))}
        </>
    )
};

export default RecipePage;