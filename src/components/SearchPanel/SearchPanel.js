import './SearchPanel.css';

const SearchPanel = () => {
  const searchText = 'Type here for search';
  return <input className="form-control search-input" type="text" 
  placeholder={searchText}/>
}

export default SearchPanel;
