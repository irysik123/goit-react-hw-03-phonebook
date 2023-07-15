import PropTypes from 'prop-types';
import { Container } from './Filter.styled';


const Filter = ({ handleFilterChange, value}) => {
    return (
        <Container>
            <input
          type="text"
          name="name"
          onChange={handleFilterChange}
          value={value}
        />
        </Container>
    )
}

export default Filter;

Filter.propTypes = {
    handleFilterChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}