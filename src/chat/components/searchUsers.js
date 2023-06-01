import { Box, InputBase, IconButton } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import { handleQueryString } from "../slices/usersSlice";

const SearchUsers = () => {

    const dispatch = useDispatch();

    const { register, handleSubmit, resetField, formState: { isDirty } } = useForm({
        defaultValues: {
            search: '',
        },
        mode: 'onChange',
    });

    const onSearch = async (data, event) => {
        event.preventDefault();
        const { search } = data;
        dispatch(handleQueryString(search));
    };

    const clearSearchField = () => {
        resetField('search');
    };

    const renderSearchIcon = isDirty
        ? <IconButton onClick={clearSearchField}>
            <CloseOutlinedIcon color="primary" />
        </IconButton>
        : <IconButton onClick={clearSearchField}>
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