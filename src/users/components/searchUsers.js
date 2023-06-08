import { Box, InputBase, IconButton } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { handleQueryString } from "../slices/usersSlice";
import { fetchUsers } from '../slices/usersSlice';
import useDebounce from "../../hooks/useDebounce";

const SearchUsers = () => {

    const { searchResults, queryString } = useSelector(state => state.users);
    const dispatch = useDispatch();

    const { register, handleSubmit, setValue, getValues, formState: { isDirty } } = useForm({
        defaultValues: {
            search: '',
        },
    });

    const debounce = useDebounce(queryString, 300);
    
    useEffect(() => {
        if (debounce !== '') {
            dispatch(fetchUsers(debounce));
        }
    }, [dispatch, debounce]);

    const onSearch = (data) => {
        const { search } = data;

        dispatch(handleQueryString(search.trim()));

        // if (searchResults > 0 || search.length < queryString.length) {
        //     dispatch(handleQueryString(search.trim()));
        // }
    };

    const clearSearchField = () => {
        setValue('search', '');
        const values = getValues();
        dispatch(handleQueryString(values.search));
    };

    const renderSearchIcon = isDirty
        ? <IconButton onClick={clearSearchField}>
            <CloseOutlinedIcon color="primary" />
        </IconButton>
        : <IconButton disabled>
            <SearchOutlinedIcon color="primary" />
        </IconButton>

    return (
        <Box
            component='form'
            noValidate="novalidate"
            onChange={handleSubmit(onSearch)}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                pl: '20px',
                pr: '10px'
            }}>

            <InputBase
                sx={{ height: 50 }}
                placeholder="Seach"
                inputProps={{ 'aria-label': 'Search' }}
                {...register('search')}
            />

            {renderSearchIcon}
        </Box>
    );
};

export default SearchUsers;