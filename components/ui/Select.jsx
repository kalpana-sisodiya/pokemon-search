import { IoIosArrowDown } from "react-icons/io";

const Select = ({ value, onChange, options, placeholder = "Select" }) => {
  return (
    <div className="relative max-w-[300px] w-full">
      <select
        className="block capitalize appearance-none w-full h-10 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none mb-2"
        value={value}
        onChange={onChange}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>

      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Select;
