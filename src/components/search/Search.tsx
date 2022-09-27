import React, { ChangeEvent, useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';

import classes from './Search.module.css';

import { ReturnComponentType } from 'types';

export const Search = (): ReturnComponentType => {
    // const [searchParams, setSearchParams] = useSearchParams();

    const [value, setValue] = useState<string>('');
    // const debouncedValue = useDebounce<string>(value, DELAY);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value);
    };

    // useEffect(() => {
    //     if (!isDataFetched) {
    //         return;
    //     }
    //
    //     onChangeValue(debouncedValue);
    //     searchParams.set(uriParam, debouncedValue);
    //
    //     setSearchParams(searchParams);
    // }, [debouncedValue]);

    return (
        <div className={classes.wrapper}>
            <span className={classes.title}>Search</span>
            <TextField
                size="small"
                id="input-with-icon-textfield"
                placeholder="Provide your text"
                onChange={handleChange}
                value={value}
                style={{ height: 36, width: 400 }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
            />
        </div>
    );
};
