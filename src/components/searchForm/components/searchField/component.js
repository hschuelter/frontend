const React = require('react');

module.exports = ({ onChange }) => {
    return (
            <div class="search-field">
                <b> Busca: </b>
                <input 
                    type='text' 
                    placeholder='Search' 
                    name='q' 
                    onChange={onChange} />
            </div>
    );
};