import React from 'react';

interface FileUploadProps {
  className?: string;
  style?: object;
  href?: any;
  id?: number
}
const FileUpload: React.FC<FileUploadProps> = ({
  children,
  className,
  style,
  href,
  id,
  ...props
  }) => {
    const hiddenFileInput = React.useRef(null);
  
    const handleClick = event => {
      hiddenFileInput.current.click();
    };
    const handleChange = event => {
      const fileUploaded = event.target.files[0];
    };
    
    return (
      <div className={`file-upload ${ className ? className : '' }`} {...props}>
        PNG, GIF, WEBP, MP4 or MP3. Max 100mb.
        <button onClick={handleClick} className="btn-default btn-primary btn-rounded">
          Choose file
        </button>
        <input type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{display:'none'}} 
        />
      </div>
    )
}

export default FileUpload;