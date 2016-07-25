"use strict";

import React, { PropTypes } from "react";
import TextInput from "../common/TextInput";

const NewTrackForm = ({ track, onSave, onChange, errors }) => {
    return (
      <form>
        <h1>New Playlist</h1>
        <TextInput name="Name"
                   label="Name"
                   value={track.Name}
                   onChange={onChange}
                   error={errors.Name} />

        <input type="submit"
               value="Save"
               className="btn btn-primary"
               onClick={onSave} />
      </form>
    );
};

NewTrackForm.propTypes = {
  track: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default NewTrackForm;
