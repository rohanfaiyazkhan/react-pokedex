import PropTypes from "prop-types";
import styled from "styled-components";
import { StatNames } from "./InfoTextArea/StatNames";

const StatsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    column-gap: 0.75rem;
    margin: 0;
    padding: 0;

    li {
        list-style: none;
        margin: 0.25rem 0;
        display: flex;
        justify-content: space-between;
        font-size: 0.9rem;
    }
`;

function Stats({ stats, ...props }) {
    return (
        <StatsList {...props}>
            {stats.map((stat) => (
                <li key={stat.stat.name}>
                    <span className="stat-name">
                        {StatNames[stat.stat.name]}:
                    </span>
                    <span className="stat-val">{stat.base_stat}</span>
                </li>
            ))}
        </StatsList>
    );
}

Stats.propTypes = {
    stats: PropTypes.array.isRequired,
    className: PropTypes.string,
    style: PropTypes.string,
};

export default Stats;
