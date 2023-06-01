import { Box, IconButton, InputBase } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useEffect } from "react";
import { useForm } from 'react-hook-form';


const SendMessage = () => {

    const { register, handleSubmit, resetField, setFocus } = useForm({
        defaultValues: {
            message: '',
            search: '',
        },
        mode: 'onSubmit',
    });

    const onSubmit = async (data, event) => {
        event.preventDefault();
        const { message } = data;
        if (message.trim() === '') {
            resetField('message');
            return;
        }

        console.log(message.trim());
        resetField('message');
    };

    useEffect(() => {
        setFocus('message');
    }, [setFocus]);

    return (
        <Box
            component="form"
            noValidate="novalidate"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ display: 'flex', alignItems: 'center', pr: '10px', pl: '20px' }}
        >
            <InputBase
                sx={{ flex: 1, height: 50 }}
                placeholder="Type Message"
                inputProps={{ 'aria-label': 'type message' }}
                {...register('message')}
            />
            <IconButton
                type="submit"
                color="primary"
                sx={{ p: '10px' }}
                aria-label="directions">
                <SendIcon />
            </IconButton>
        </Box>
    );
};

export default SendMessage;