import { useState } from "react";

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const [searchUrl, setSearchUrl] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    
    event.preventDefault();
    const url = `https://api.duckduckgo.com/?q=${searchValue}&format=json`;
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Handle the returned results
        // setSearchUrl(`${url}&iframe=1`);
      })
      .catch((error) => {
        // Handle any errors
        console.log(error);
      });
    setSearchValue('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='help-widget-search'>
        <input
          className='help-widget-search-container'
          type='search'
          placeholder='Search'
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <button
          type='submit'
          className='fa-solid fa-magnifying-glass fa-lg help-widget-search-btn'
        />
      </form>
      {searchUrl && (
        <div className='widget-search-frame'>
          <iframe
            title={searchValue}
            allowFullScreen
            height='100%'
            width='100%'
            src={searchUrl}
          />
        </div>
      )}
    </div>
  );
}

export default SearchBar;
