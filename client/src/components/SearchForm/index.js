import React from "react";
import "./SearchForm.css";
// This file exports the Input, TextArea, and FormBtn components

const SearchForm = props => {
  return (
      <form>
          <div className="form-group">
              <label className="BookSearchLabel"><h3>Search For Book</h3></label>
              <br></br>
              <input className="col-12 form-control"
                  value={props.search}
                  type="text"
                  name="searchBook"
                  placeholder="Enter Book's Name"
                  onChange={props.handleInputChange}
              />
          </div>
          <button type="submit" className="submitBtn submit" onClick={props.handleFormSubmit}>
              Submit
          </button>
      </form>
  )
}

export default SearchForm