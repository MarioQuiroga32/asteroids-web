import { useEffect, useState } from 'react';
import { DateInput, DateLabel, DateWrapper, OrderSelect, SearchBarWrapper, SearchInput } from "./SearchBar.styled";

const SearchBar = ({ handleDateChange, onOrderChange, onSearchTermChanged }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [order, setOrder] = useState('');

    useEffect(() => {
        startDate && endDate && handleDateChange(startDate, endDate);
    }, [startDate, endDate]);

    const handleOrderChange = (event) => {
        const selectedOrder = event.target.value;
        setOrder(selectedOrder);
        onOrderChange(selectedOrder);
    };

    return (
        <SearchBarWrapper>
            <SearchInput
                type="text"
                placeholder="Search..."
                onChange={(event) => onSearchTermChanged(event.target.value)}
            />
            <DateWrapper>
                <DateLabel htmlFor="startDate">From:</DateLabel>
                <DateInput
                    id="startDate"
                    type="date"
                    value={startDate}
                    onChange={(event) => setStartDate(event.target.value)}
                />
                <DateLabel htmlFor="endDate">To:</DateLabel>
                <DateInput
                    id="endDate"
                    type="date"
                    value={endDate}
                    onChange={(event) => setEndDate(event.target.value)}
                />
            </DateWrapper>
            <OrderSelect value={order} onChange={handleOrderChange}>
                <option value="">Order By</option>
                <option value="diameter">Diameter</option>
                <option value="name">Name</option>
                <option value="distance">Distance</option>
            </OrderSelect>
        </SearchBarWrapper>
    );
};

export default SearchBar;
