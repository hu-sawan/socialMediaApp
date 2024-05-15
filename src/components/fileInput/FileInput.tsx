import "./FileInput.scss";

interface FileInputProps {
    icon: JSX.Element;
    text?: string;
    accept?: string;
    setFile: (file: File) => void;
}

function FileInput({ icon, text, accept, setFile }: FileInputProps) {
    return (
        <div className="input-wrapper contain-file">
            <label htmlFor="file-input">
                {icon}
                {text && <span>{text}</span>}
            </label>
            <input
                className="file-input"
                id="file-input"
                type="file"
                name="file"
                accept={accept}
                onChange={(e) => {
                    setFile(e.target.files![0]);
                }}
            />
        </div>
    );
}

export default FileInput;
