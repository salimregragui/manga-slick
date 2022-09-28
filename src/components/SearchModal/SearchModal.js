import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineClear } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setSearchModal } from "../../store/slices/globalSlice";
import classes from "./SearchModal.module.scss";

function SearchModal() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const closeSearchHandler = (e) => {
    e.stopPropagation();

    dispatch(setSearchModal(false));
  };

  const searchInputHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={classes.SearchModal} onClick={closeSearchHandler}>
      <div
        className={classes.SearchModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes.SearchModalInput}>
          <AiOutlineSearch />
          <input
            type="text"
            placeholder={t("searchbar.placeholder")}
            autoFocus
            value={search}
            onChange={searchInputHandler}
          />

          {search !== "" && (
            <button className={classes.SearchModalInputClear} onClick={() => setSearch("")}>
              <MdOutlineClear />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
