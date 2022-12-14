import { Add, Menu } from "@mui/icons-material";
import {
  Autocomplete,
  CircularProgress,
  IconButton,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useUIContext } from "../../context/ui";
import { AppbarContainer, SearchField } from "../../style/components";
import { palette } from "../../style/theme";

const MobileAppbar = () => {
  const { setDrawerOpen } = useUIContext();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [cookie, setCookie] = useCookies();

  useState(() => {
    setLoading(true);
    fetch("https://password-manager-backend.vercel.app/user/passwords", {
      headers: {
        Authorization: cookie.session,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        let urlList = [];
        json.passwords.forEach((password) => {
          urlList.push(password);
        });
        setOptions(urlList);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <AppbarContainer>
      <IconButton
        sx={{ backgroundColor: palette.purple.main }}
        onClick={() => {
          setDrawerOpen(true);
        }}
      >
        <Menu fontSize="medium" color="secondary" />
      </IconButton>
      <Autocomplete
        sx={{ width: "50%" }}
        id="asynchronous-demo"
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        isOptionEqualToValue={(option, value) => option.title === value.title}
        getOptionLabel={(option) => option.title}
        options={options}
        loading={loading}
        renderInput={(params) => (
          <SearchField
            {...params}
            label="Search..."
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="secondary" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      ></Autocomplete>
      <IconButton sx={{ backgroundColor: palette.purple.main }}>
        <Add fontSize="medium" color="secondary" />
      </IconButton>
    </AppbarContainer>
  );
};

export default MobileAppbar;
