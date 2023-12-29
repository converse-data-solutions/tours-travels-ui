import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const SearchDropDown = (props: any) => {
  const {
    label,
    id,
    value,
    onChange,
    options,
    displayEmpty,
    width,
    height,
    borderRadius,
    borderColor,
    ariaLabel,
    placeholder,
    required,
  } = props;

  return (
    <div>
      <FormControl sx={{ minWidth: "100%" }}>
        {label && <InputLabel id={`${id}-label`}>{label}</InputLabel>}
        <Select
          labelId={`${id}-label`}
          id={id}
          value={value}
          onChange={onChange}
          displayEmpty={displayEmpty}
          inputProps={{ "aria-label": ariaLabel }}
          required
          className={`border-[1px] border-[hsl(0,100%,99%)]  rounded-lg h-[50px] w-full pl-2 }`}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left",
            },
          }}
          sx={{
            "&:focus": {
              borderColor: "gray !important",
              "& fieldset": {
                borderColor: "white!important",
                borderWidth: "1px !important",
              },
            },
            "&.Mui-focused": {
              borderColor: "gray !important",
              "& fieldset": {
                borderColor: "white!important",
                borderWidth: "1px !important",
              },
            },
          }}
        >
          {displayEmpty && (
            <MenuItem value="" disabled>
              {placeholder}
            </MenuItem>
          )}
          {options.map((option: any) => (
            <MenuItem
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SearchDropDown;
