import TableComponent from "../components/TableComponent";
import TableComponentV1 from "../components/TableComponentV1";
import TableComponentV2 from "../components/table/TableComponentV2";

function ListPage(){
    return(
        <div>
            {/* <p className="text-center font-sans">I am the List Page</p> */}
            {/* <TableComponent/> */}
            {/* <TableComponentV1/> */}
            <TableComponentV2/>
        </div>
    )
}

export default ListPage;