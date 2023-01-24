import SampleData from './JSON/SampleData.json'
import "./css/Project3.css"
import {useState} from 'react'

function SearchFilter() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="search">
                        <input type="text" placeholder="Enter First Name..." onChange={(event) => {
                setSearchTerm(event.target.value)
            }} />
            <div className='responsive-table'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    
                    <tbody> 
                    {SampleData.filter((val) => {
                        
                        if (searchTerm === "") {
                            return val;
                        } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val;
                        }
                    }).map((val, key) => {
                        return (
                            <tr>
                                <td key={key}>{val.first_name}</td>
                                <td>{val.last_name}</td>
                                <td>{val.email}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SearchFilter;