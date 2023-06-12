import { useState } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { AsteroidsPage } from "./pages/AsteroidsPage";
import { AsteroidDetailPage } from "./pages/AsteroidDetailPage";

const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const App = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [orderBy, setOrderBy] = useState('name');

    const handleDateChange = (start, end) => {
        setStartDate(start);
        setEndDate(end);
    };

    const handleOrderBy = (orderBy) => {
        setOrderBy(orderBy);
    }

    return (
        <AppWrapper>
            <Router>
                <Routes>
                    <Route exact path="/" element={
                        <AsteroidsPage
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                            startDate={startDate}
                            setStartDate={setStartDate}
                            endDate={endDate}
                            setEndDate={setEndDate}
                            orderBy={orderBy}
                            onSearchTermChange={setSearchTerm}
                            onDateChange={handleDateChange}
                            handleOrderBy={handleOrderBy}
                            handleDateChange={handleDateChange}
                        />
                    } />
                    <Route path="/asteroids/:id" element={
                        <AsteroidDetailPage
                            searchTerm={searchTerm}
                            startDate={startDate}
                            endDate={endDate}
                        />
                    } />
                </Routes>
            </Router>
        </AppWrapper>
    );
};

export default App;
