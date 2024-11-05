import ListItem from "../ListItem/ListItem";

function OrderedList({ itemList }) {
    console.log(itemList)
    return(
        <ol>
        {itemList.map((item) => (
                <ListItem itemContent={item.item}/>
            ))}
        </ol>
    )
};

export default OrderedList;