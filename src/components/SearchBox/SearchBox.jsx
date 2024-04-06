// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './searchBox.module.css';
import { setFilter } from '../../redux/filter/filter-slice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const changeFilter = ({ target }) => dispatch(setFilter(target.value));

  return (
    <div className={css.conteinerFiltr}>
      <label className={css.labelForm} htmlFor="filter">
        Find contacts by name
        <input
          className={css.inpFiltr}
          onChange={changeFilter}
          value={filter}
          name="filter"
          placeholder="Введіть ім'я або номер"
        />
      </label>
    </div>
  );
};

export default SearchBox;
