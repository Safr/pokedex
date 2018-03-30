import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import uuidv4 from 'uuid/v4';
import Loader from '../Loader/Loader';
import { ListItem, SpanId, ListFooter } from './Pokemon.style';

class Pokemon extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps;
  }
  render() {
    const {
      id, avatar, name, type, onFilterPokemonsByType,
    } = this.props;

    const ListItemData = () => (
      <div>
        <h2 className="pokemon--species--name">{name}</h2>
        <SpanId>{`#${id}`}</SpanId>
        <Link to={`/${id}`}>
          <figure className="pokemon--species--sprite">
            <img src={avatar} alt="avatar" />
          </figure>
        </Link>
        <ListFooter>
          <div>
            {
              type.map(typeItem => (
                <button key={uuidv4()} onClick={() => onFilterPokemonsByType(typeItem)}>
                  <span className={`type type-${typeItem}`}>
                    {typeItem}
                  </span>
                </button>
              ))
            }
          </div>
        </ListFooter>
      </div>
    );
    const ListItemWithoutData = () => <Loader />;
    return (
      <ListItem>
        {

          ListItemData()
        }
      </ListItem>
    );
  }
}

Pokemon.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilterPokemonsByType: PropTypes.func.isRequired,
};

export default Pokemon;

