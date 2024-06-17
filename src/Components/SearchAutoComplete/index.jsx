import { useEffect, useState } from "react";
import Suggestions from "./suggesstions";


export default function SearchAutocomplete() {

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);

    async function fetchListOfUsers() {
        try {
            setLoading(true);

            const response = await fetch("https://dummyjson.com/users");
            const data = await response.json();
            console.log(data);

            if (data && data.users && data.users.length) {
                setUsers(data.users.map((dataItem) => dataItem.firstName));
                setLoading(false);
                setError(null);
            }

            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
            setError(error);
        }

    }

    useEffect(() => {
        fetchListOfUsers();
    }, [])

    function handleChange(event) {
        const query = event.target.value.toLowerCase();
        setSearchParam(query);
        if (query.length > 1) {
            const filteredData =
                users && users.length
                    ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
                    : [];
            setFilteredUsers(filteredData);
            console.log(filteredData);
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    }

    function handleClick(event){
        setShowDropdown(false)
        setSearchParam(event.target.innerText)
        setFilteredUsers([])
    }

    return (
        <div className="search-autocomplete-container">
            <input value={searchParam}
                type="text"
                name="search-users"
                placeholder="Search Users"
                onChange={handleChange}
            />

        {showDropdown && <Suggestions handleClick={handleClick} data={filteredUsers} />}
        </div>
    )
}