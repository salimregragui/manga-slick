import React from "react";
import { useDispatch } from "react-redux";
import { setSearchModal } from "../../store/slices/globalSlice";
import classes from "./SearchModal.module.scss";

function SearchModal() {
  const dispatch = useDispatch();

  const closeSearchHandler = (e) => {
    e.stopPropagation();

    dispatch(setSearchModal(false));
  };

  return (
    <div className={classes.SearchModal} onClick={closeSearchHandler}>
      <div
        className={classes.SearchModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <input type="text" placeholder="Search..." autoFocus />
      </div>
    </div>
  );
}

export default SearchModal;
