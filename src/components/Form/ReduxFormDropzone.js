import React, { Component } from "react";
import Dropzone from "react-dropzone";
import "./ReduxFormDropzone.css";

const ReduxFormDropzone = field => {
  const files = field.input.value;
  return (
    <div className="dropzone-style">
      <Dropzone
        name={field.name}
        onDrop={(filesToUpload, e) => field.input.onChange(filesToUpload)}
        multiple={false}
        maxSize={2097152}
        // onDropRejected={() => {
        //   intro = "The size of the file should be smaller than 2MB";
        // }}
      >
        <div className="dropzone-style">
          Try dropping some files here, or click to select files to upload.
          <br />
          Size limit: 2 MB.
        </div>
      </Dropzone>

      {files &&
        Array.isArray(files) && (
          <ul>{files.map((file, i) => <li key={i}>{file.name}</li>)}</ul>
        )}
    </div>
  );
};

export default ReduxFormDropzone;
