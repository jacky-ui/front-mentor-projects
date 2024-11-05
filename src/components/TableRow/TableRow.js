function TableRow({ tableData }) {
    return(
        <>
            {tableData.map((data) => (
                <tr key={data.tableHead}>
                    <th scope={data.scope}>{data.tableHead}</th>
                    <td>{data.tableData}</td>
                </tr>
            ))}
        </>
    )
};

export default TableRow;