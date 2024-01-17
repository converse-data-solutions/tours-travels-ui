interface ShowEntriesDropdownProps {
  entries: number;
  setEntries: React.Dispatch<React.SetStateAction<number>>;
}

const ShowEntriesDropdown: React.FC<ShowEntriesDropdownProps> = ({
  entries,
  setEntries,
}) => {
  return (
    <select
      name="entries"
      id="entries"
      className="border-[1px] border-gray-200 w-full px-4 py-3 mb-2  rounded-lg outline-none md:w-1/3  bg-white text-base text-gray-500"
      value={entries}
      onChange={(e) => setEntries(parseInt(e.target.value))}
    >
      <option value="Show Entries" disabled style={{ color: "gray" }}>
        Show Entries
      </option>
      <option value="10" style={{ color: "gray" }}>
        10
      </option>
      <option value="20" style={{ color: "gray" }}>
        20
      </option>
      <option value="30" style={{ color: "gray" }}>
        30
      </option>
    </select>
  );
};

export default ShowEntriesDropdown;
