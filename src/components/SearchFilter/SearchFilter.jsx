import React from 'react';
import css from './SearchFilter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterState } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';

export const SearchFilter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const handleChange = event => {
    dispatch(setFilterState(event.target.value));
  };

  return (
    <div>
      <p>Find contacts by name:</p>
      <input
        className={css.input}
        type="input"
        name="filter"
        value={filter}
        onChange={handleChange}
        placeholder="Input name to filter"
      />
    </div>
  );
};
