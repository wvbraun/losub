"use strict";

import React, { PropTypes } from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const NewPlaylistForm = ({ playlist, onSave, onChange, errors }) => {
    return (
      <form>
        <h1>New Playlist</h1>
        <TextInput name="Title"
                   label="Title"
                   value={playlist.Title}
                   onChange={onChange}
                   error={errors.Title} />

        <input type="submit"
               value="Save"
               className="btn btn-primary"
               onClick={onSave} />
      </form>
    );
};

NewPlaylistForm.propTypes = {
  playlist: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default NewPlaylistForm;
