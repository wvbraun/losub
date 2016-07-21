"use strict";

import React, { PropTypes } from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const CreatePlaylistForm = ({ playlist, onSave, onChange, errors }) => {
    return (
      <form>
        <h1>New Playlist</h1>
        <TextInput name="Name"
                   label="Name"
                   value={playlist.Name}
                   onChange={onChange}
                   error={errors.Name} />

        <input type="submit"
               value="Save"
               className="btn btn-primary"
               onClick={onSave} />
      </form>
    );
};

CreatePlaylistForm.propTypes = {
  playlist: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default CreatePlaylistForm;
