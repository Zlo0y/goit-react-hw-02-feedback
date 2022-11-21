import PropTypes from 'prop-types';
import { List } from './Statistics.styled';

export const Statistics = ({ allStates, total, positivePercentage }) => (
    <List>
        {Object.entries(allStates).map(el => (
            <li key={el[0]}>
                {el[0]}: {el[1]}
            </li>
        ))}
        <li>
            Total: {total}
        </li>
        <li>
            Positive feedback: {positivePercentage}%
        </li>
    </List>
);

Statistics.propTypes = {
    allStates: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }).isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};