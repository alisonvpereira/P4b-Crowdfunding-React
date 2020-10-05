import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import CategoryInfo from "../../pages/CategoryInfo";
import categoryList from "../../pages/CategoryListPage";

const CategoryInfoModal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <CategoryInfo />
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default CategoryInfoModal;
