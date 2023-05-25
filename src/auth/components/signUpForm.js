import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ky from 'ky';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
    userName: yup.string()
        .required('Name is required.')
        .min(2, 'Name must be at least 2 characters long.'),
    email: yup.string()
        .required('Email is required.')
        .email('Email must be valid.'),
    password: yup.string()
        .required('Password is required.')
        .min(8, 'Password must be at least 8 characters long.')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter.')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
        .matches(/[0-9]/, 'Password must contain at least one digit.'),
}).required();

const SignUpForm = () => {

    const navigate = useNavigate();

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: {
            userName: '',
            email: "",
            password: "",
        },
        mode: 'onChange',
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (data, event) => {
        event.preventDefault();
        const result = await ky.post('http://localhost:8000/api/v1.0/users/signup', {
            json: data,
            credentials: 'include',
        }).json();

        setValue('userName', '');
        setValue('email', '');
        setValue('password', '');

        if (result.status === 'success') {
            navigate('/', 'replace');
        }
    };


    return (

        <form
            noValidate="novalidate"
            onSubmit={handleSubmit(onSubmit)}>

            <div style={{
                textAlign: 'center',
                fontSize: '1.5rem',
                marginBottom: '1.5rem',
            }}>Sign Up</div>

            <TextField
                fullWidth
                size='small'
                margin="dense"
                label="Username"
                variant="outlined"
                {...register('userName')}
                error={!!errors.userName}
                helperText={errors.userName?.message || ' '}
            />

            <TextField
                fullWidth
                size='small'
                margin="dense"
                label="Email"
                variant="outlined"
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message || ' '}
            />

            <TextField
                fullWidth
                size='small'
                margin="dense"
                label="Password"
                type="password"
                variant="outlined"
                {...register('password')}
                error={!!errors.password}
                helperText={errors.password?.message || ' '}
            />

            <Button
                fullWidth
                variant="contained"
                type="submit"
                sx={{
                    height: '45px',
                    margin: '25px 0',
                    fontSize: '1rem'
                }}
            >
                Sign Up
            </Button>

        </form>
    );
};

export default SignUpForm;