import { useState } from 'react';
import { sortTypes } from './constants/all-constants';

type SortingProps = {
    onClick(value: sortTypes): void;
    sortByCurrent: sortTypes;
}

export default function Sorting({onClick, sortByCurrent}: SortingProps): JSX.Element {
  const [sortingOptionsOpened, setSortingOptionsOpened] = useState(false);

  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setSortingOptionsOpened(!sortingOptionsOpened)}>
        <p>{sortByCurrent}</p>
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${sortingOptionsOpened ? 'places__options--opened' : 'places__options--closed'}`}
        onClick={(evt) => {
          const target = evt.target as HTMLElement;
          if(target.tagName !== 'LI') {
            return;
          }
          onClick(target.textContent as sortTypes);
          setSortingOptionsOpened(!sortingOptionsOpened);
        }}
      >
        <li className={`places__option ${sortByCurrent === sortTypes.Popular ? 'places__option--active' : ''}`} tabIndex={0}>Popular</li>
        <li className={`places__option ${sortByCurrent === sortTypes.PriceUp ? 'places__option--active' : ''}`} tabIndex={0}>Price: low to high</li>
        <li className={`places__option ${sortByCurrent === sortTypes.PriceDown ? 'places__option--active' : ''}`} tabIndex={0}>Price: high to low</li>
        <li className={`places__option ${sortByCurrent === sortTypes.Top ? 'places__option--active' : ''}`} tabIndex={0}>Top rated first</li>
      </ul>
    </form>
  );
}
