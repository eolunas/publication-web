import React, { ChangeEvent } from "react";

interface EditableFieldProps {
  value: string;
  editable: boolean;
  handleChange: (newValue: string) => void;
}

const EditableField: React.FC<EditableFieldProps> = ({
  value,
  editable,
  handleChange,
}) => {
  return (
    <div className="w-full p-2">
      {editable ? (
        <input
          className="w-full h-auto border border-solid border-black m-2"
          type="text"
          defaultValue={value}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange(event.target.value)
          }
          autoFocus
        />
      ) : (
        <span className="w-full">{value}</span>
      )}
    </div>
  );
};

export default EditableField;
