import PropTypes from 'prop-types'

const Item = ({item}) => {
    return ( 
        <div>
            <h3>{item.title}</h3>
            <p>stock:{item.stock}</p>
        </div>
     );
}

Item.propTypes = {
  item:PropTypes.object
}

export default Item;