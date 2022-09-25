import { Add, ShoppingCart } from "@mui/icons-material";
import {
  Autocomplete,
  CircularProgress,
  IconButton,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useUIContext } from "../../context/ui";
import { AppbarContainer, SearchField } from "../../style/components";
import { palette } from "../../style/theme";

const DesktopAppbar = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [cookie, setCookie] = useCookies();

  useEffect(() => {
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

  const openCart = (e) => {
    setCartOpen(e.currentTarget);
  };

  return (
    <AppbarContainer
      sx={{
        width: `calc(100% - 450px)`,
        ml: `340px`,
      }}
    >
      <Autocomplete
        sx={{ width: "20%" }}
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
            sx={{ input: { color: "white" } }}
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
        <Add fontSize="large" sx={{ color: "white" }} />
      </IconButton>
    </AppbarContainer>
  );
};

export default DesktopAppbar;
