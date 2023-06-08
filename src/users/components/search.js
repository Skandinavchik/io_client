import { Box, InputBase, IconButton } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import { fetchConversations } from "../slices/conversationsSlice";

const Search = () => {

    const dispatch = useDispatch();

    const { register, handleSubmit, setValue, formState: { isDirty } } = useForm({
        defaultValues: {
            search: '',
        },
    });

    const userId = localStorage.getItem('id');

    useEffect(() => {
        dispatch(fetchConversations(userId));
    }, [dispatch, userId]);

    const onSearch = (data) => {

    };

    const clearSearchField = () => {
        setValue('search', '');
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

export default Search;