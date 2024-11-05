import useSetBodyClass from '../../utils/SetBodyClass';
import useSetTitle from '../../utils/SetTitle';
import { recipeConstants } from '../../assets/constants/constants';
import recipeImage from '../../assets/images/image-omelette.jpeg';
import Divider from '../../components/Divider/Divider';
import OrderedList from '../../components/OrderedList/OrderedList';
import UnorderedList from '../../components/UnorderedList/UnorderedList';
import TableRow from '../../components/TableRow/TableRow';
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
                    {content.prepSection.map((prep) => (
                        <section className='prepContain'>
                            <h2>{prep.title}</h2>
                            <UnorderedList itemList={prep.list}/>
                        </section>
                    ))}
                    {content.ingredients.map((ingredient) => (
                        <section className='ingredients'>
                            <h2>{ingredient.title}</h2>
                            <UnorderedList itemList={ingredient.list}/>
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
                                <TableRow tableData={content.tableData}/>
                            </tbody>
                        </table>
                    </section>
                </main>
            ))}
        </>
    )
};

export default RecipePage;