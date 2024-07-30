import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { useId } from "react";
import { selectFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  // const selectorFilter = useSelector((state) => state.filter.name);
  const selectorFilter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const searchBoxId = useId();
  // let value;

  const handleFilter = (event) => {
    dispatch(changeFilter(event.target.value));
    // value = event.target.value;
  };
  return (
    <div className={css.searchBoxWraper}>
      <label className={css.searchBoxLabel} htmlFor={searchBoxId}>
        Find contact by name
      </label>
      <input
        className={css.serchBoxInput}
        type="text"
        name="searchBoxId"
        id={searchBoxId}
        value={selectorFilter}
        onChange={handleFilter}
      />
    </div>
  );
}
