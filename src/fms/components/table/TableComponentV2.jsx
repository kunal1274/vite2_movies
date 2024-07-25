import { useState } from "react";
import p from "../../../utility/p"

const data = {
    "vendors": [
        {
            "vendorID": "V001",
            "name": "ABC Supplies",
            "contactPerson": "John Doe",
            "email": "john.doe@abcsupplies.com",
            "phone": "+1-555-123-4567",
            "address": {
                "street": "123 Elm Street",
                "city": "Springfield",
                "state": "IL",
                "zip": "62704",
                "country": "USA"
            },
            "taxID": "123-45-6789",
            "status": "Active",
            "createdDate": "2022-01-15",
            "lastUpdated": "2023-06-01",
            "orders": [
                {
                    "orderID": "O1001",
                    "orderDate": "2023-05-10",
                    "totalAmount": 2500.00,
                    "status": "Delivered"
                },
                {
                    "orderID": "O1002",
                    "orderDate": "2023-05-25",
                    "totalAmount": 1200.00,
                    "status": "Pending"
                }
            ]
        },
        {
            "vendorID": "V002",
            "name": "XYZ Products",
            "contactPerson": "Jane Smith",
            "email": "jane.smith@xyzproducts.com",
            "phone": "+1-555-987-6543",
            "address": {
                "street": "456 Oak Street",
                "city": "Metropolis",
                "state": "NY",
                "zip": "10001",
                "country": "USA"
            },
            "taxID": "987-65-4321",
            "status": "Active",
            "createdDate": "2022-05-20",
            "lastUpdated": "2023-05-30",
            "orders": []
        },
        {
            "vendorID": "V003",
            "name": "LMN Electronics",
            "contactPerson": "Robert Brown",
            "email": "robert.brown@lmnelectronics.com",
            "phone": "+1-555-654-3210",
            "address": {
                "street": "789 Pine Street",
                "city": "Gotham",
                "state": "NJ",
                "zip": "07001",
                "country": "USA"
            },
            "taxID": "456-78-9012",
            "status": "Inactive",
            "createdDate": "2021-11-05",
            "lastUpdated": "2023-04-10",
            "orders": [
                {
                    "orderID": "O1003",
                    "orderDate": "2023-03-15",
                    "totalAmount": 3200.00,
                    "status": "Cancelled"
                }
            ]
        }
    ]
}
const findColumns = (data) =>{
    // console.log(data[0])
    // const x = Object.entries(data[0])
    // console.log(Object.entries(data[0]))
    // for(let i =0 ; i<x.length;i++){
    //     p(i,x[i][0],x[i][1])
    // }
    const keyOfData = Object.keys(data[0])
    // p(keyOfData)
    return keyOfData;   
}

const createInitialValues = (arrayParam) =>{
    let ansObject ={}
    for(let i=0;i<arrayParam.length ; i++){
        ansObject[arrayParam[i]]="";
    }
    return ansObject;
}
// let globalSavedLabel={}
function TableComponentV2(props){
   
    let ans = findColumns(data.vendors)
    //p("ans",ans)
    let initialValuesObj = createInitialValues(ans)
    //p("initial Values Object data ",initialValuesObj)

    const [colLabel,setColLabel] = useState(initialValuesObj)
    const [savedLabel,setSavedLabel] = useState({})
    // const propData = props.data;
    
    
    

    const handleEventOnChangeTextInput = (e)=>{
        const {name,value} = e.target

        setColLabel({
            ...colLabel,
            [name]:value
        })
    }

    const handleEventOnClickButtonSaveAllLabels =()=>{
        // p("done saving the labels",colLabel)
        // savedLabels = colLabel;
        // p("saved labels",savedLabels)
        setSavedLabel({...colLabel})
        // p("After Saving",savedLabel)
        // globalSavedLabel = {...savedLabel}

    }
    return(
        <table>
            <caption>
                My Caption
                <div className="border border-gray-200 bg-blue-200 p-2 w-[10vw] h-[4vh] hover:cursor-pointer">
                    <button onClick={handleEventOnClickButtonSaveAllLabels}>Save All Labels</button>
                </div>
                
            </caption>
            <thead>
                <tr>
                    {
                        ans.map((element,index)=>{
                            // p("inside thead saved ",savedLabels)
                            // p("inside thead column",colLabel)
                            return(
                                <th key={index}>
                                    {element}
                                    <div>
                                        <input type="text" placeholder={element} name={element} value={colLabel[element]} onChange={handleEventOnChangeTextInput}/>
                                        <label htmlFor={element}>{savedLabel[element]}</label>
                                    </div>
                                </th>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>No value</td>
                    <td>value 1</td>
                    <td>value 2</td>
                    <td>value 3</td>
                </tr>
                <tr>
                    <td>No value</td>
                    <td>value 4</td>
                    <td>value 5</td>
                    <td>value 6</td>
                </tr>
                <tr>
                    <td>No value</td>
                    <td>value 7</td>
                    <td>value 8</td>
                    <td>value 9</td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableComponentV2;