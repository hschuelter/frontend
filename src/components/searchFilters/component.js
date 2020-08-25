const React = require('react');

module.exports = ({ setAuthor, setVenue, setBeginDate, setEndDate, setLimit }) => {
    return (
        <div class="search-filters">
            <div class="filter-line">
                <div class="filter-field">
                    <b> Autores: </b>
                    <input 
                        type='text' 
                        placeholder='Nome' 
                        name='author-filter' 
                        onChange={ setAuthor } />
                </div>
                <div class="filter-field">
                    <b> Venue: </b>
                    <input 
                        type='text' 
                        placeholder='Nome' 
                        name='venue-filter' 
                        onChange={ setVenue } />
                </div>
            </div>

            <div class="filter-line">
                <div class="filter-field">
                    <b> Data de início: </b>
                    <input 
                        type="month"
                        name="begin-date-filter"
                        onChange={ setBeginDate } />
                </div>
                <div class="filter-field">
                    <b> Data de fim: </b>
                    <input 
                        type="month"
                        name="end-date-filter" 
                        onChange={ setEndDate } />
                </div>
            </div>

            <div class="filter-line">
                <div class="filter-field">
                    <b> Limite de artigos: </b>
                    <input 
                        type='number' 
                        placeholder='Número' 
                        name='count-filter' 
                        onChange={ setLimit } />
                </div>
            </div>
        </div>
    );
};