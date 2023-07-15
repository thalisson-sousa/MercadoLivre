import React, { useState, useContext } from 'react';
import { BsSearch } from 'react-icons/bs';

import './SearchBar.css';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContex';

export default function SearchBar() {

  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);

    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className="search_input"
        onChange={(event) => setSearchValue(event.target.value)}
        required
      />
      <button type="submit" className="search_button">
        <BsSearch/>
      </button>
    </form>
  );
}
