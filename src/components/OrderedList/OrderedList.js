import ListItem from "../ListItem/ListItem";

function OrderedList({ itemList }) {
    return(
        <ol>
            {itemList.map((item) => (
                <ListItem itemContent={item.item} key={item.item}/>
            ))}
        </ol>
    )
};

export default OrderedList;