import v4 as uuid from 'uuid'
import PropTypes from 'prop-types';

export const Sidebar = ({items}) => {
    return(
        <div>
            {items.map((item) => {
                <Item title={item.title} desc={title.desc} key={uuid()} />
            })}
        </div>
    )
}

Sidebar.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
    })).isRequired,
};
