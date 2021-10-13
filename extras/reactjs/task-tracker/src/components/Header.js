import PropTypes from 'prop-types';
import Button from "./Button";

const Header = ({title}) => {
    const onClick = (event) => {
        console.log('Click')
    }

    return (
        <header className={'header'}>
            <h1>{title}</h1>
            <Button color={'green'} text={'Add'} onClick={onClick}/>
        </header>
    );
};

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// to add inline styling add this property `style={headingStyle}` on the h1
const headingStyle = {
    color:'orange',
    backgroundColor:'grey'
}
export default Header;