import { memo } from 'react';

const Search = ({searchterm,setsearchterm}) => {
  return (
    <div className='search'>
      <div>
      <img src="search.svg" alt="search" />
      <input type="text" placeholder='search movie'
      value={searchterm} onChange={(e)=>setsearchterm(e.target.value)} />
      </div>
    </div>
  );
};

export default memo(Search);