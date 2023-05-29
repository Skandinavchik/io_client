import { Box, Paper, IconButton, InputBase, Divider } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useForm } from 'react-hook-form';
import { useEffect } from "react";
import Users from "../../users/components/users";


const Chat = () => {

    const { register, handleSubmit, setValue, setFocus } = useForm({
        defaultValues: {
            message: '',
        },
        mode: 'onSubmit',
    });

    const onSubmit = async (data, event) => {
        event.preventDefault();
        const { message } = data;
        if (message.trim() === '') {
            setValue('message', '');
            return;
        }

        console.log(message.trim());
        setValue('message', '');
    };

    useEffect(() => {
        setFocus('message');
    }, [setFocus]);

    return (
        <Box sx={{
            display: 'flex',
            width: 800,
            boxShadow: 20,
        }}>
            <Box sx={{ width: '30%' }}>
                <Paper
                    elevation={0}
                    sx={{
                        height: '600px',
                        borderBottom: 'none',
                        borderRadius: 0,
                    }}>
                    <Box sx={{
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
                        />

                        <IconButton
                            type="submit"
                            color="primary"
                            sx={{ p: '10px' }}
                            aria-label="directions">
                            <SearchOutlinedIcon />
                        </IconButton>
                    </Box>

                    <Divider orientation='horizontal' />

                    <Users/>
                </Paper>

                <Divider orientation='horizontal' />

                <Paper
                    elevation={0}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: 50,
                        pl: '10px',
                        pr: '10px'
                    }}
                >
                    <IconButton
                        color="primary"
                        aria-label="user"
                        sx={{ p: '10px' }}>
                        <AccountCircleOutlinedIcon />
                    </IconButton>

                    <IconButton
                        color="primary"
                        aria-label="user"
                        sx={{ p: '10px' }}>
                        <ChatBubbleOutlineOutlinedIcon />
                    </IconButton>

                    <IconButton
                        color="primary"
                        aria-label="user"
                        sx={{ p: '10px' }}>
                        <SettingsOutlinedIcon />
                    </IconButton>
                </Paper>
            </Box>

            <Divider sx={{ height: 650 }} orientation="vertical" />

            <Box sx={{ width: '70%' }}>
                <Paper
                    elevation={0}
                    sx={{
                        height: '600px',
                        borderBottom: 'none',
                        borderRadius: 0,
                    }}>
                </Paper>

                <Divider orientation='horizontal' />

                <Paper
                    elevation={0}
                    component="form"
                    noValidate="novalidate"
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{ display: 'flex', alignItems: 'center' }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1, height: 50 }}
                        placeholder="Type Message"
                        inputProps={{ 'aria-label': 'type message' }}
                        {...register('message')}
                    />

                    <Divider sx={{ height: 40, m: 0.5 }} orientation="vertical" />

                    <IconButton
                        type="submit"
                        color="primary"
                        sx={{ p: '10px' }}
                        aria-label="directions">
                        <SendIcon />
                    </IconButton>
                </Paper>
            </Box>
        </Box>
    );
};

export default Chat;