import React from "react";

interface Props {
  id: string;
  label: string;
  icon: React.ReactNode;
  accept: string;
  multiple?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UploadButton({
  id,
  label,
  icon,
  accept,
  multiple,
  onChange,
}: Props) {
  return (
    <>
      <input
        id={id}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={onChange}
        className="hidden"
      />
      <label
        htmlFor={id}
        className="flex items-center gap-1 px-3 py-1 border rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        {icon}
        <span className="text-sm">{label}</span>
      </label>
    </>
  );
}
