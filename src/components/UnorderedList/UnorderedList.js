import ListItem from "../ListItem/ListItem";

function UnorderedList({ itemList }) {
    return(
        <ul>
            {itemList.map((item) => (
                <ListItem itemContent={item.item} key={item.item}/>
            ))}
        </ul>
    )
};

export default UnorderedList;