import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ky from 'ky';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const validationSchema = yup.object({
    email: yup.string()
        .required('Email is required.'),
    password: yup.string()
        .required('Password is required.'),
}).required();



const SignInForm = () => {

    const navigate = useNavigate();

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onChange',
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (data, event) => {
        event.preventDefault();
        const result = await ky.post('http://localhost:8000/api/v1.0/users/signin', {
            json: data,
            credentials: 'include',
        }).json();

        setValue('email', '');
        setValue('password', '');

        if (result.status === 'success') {
            localStorage.setItem('id', result.data.user._id);
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
            }}>Sign In</div>

            <TextField
                fullWidth
                size='small'
                margin="dense"
                label="Email"
                variant="standard"
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
                variant="standard"
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
                Sign In
            </Button>
        </form>
    );
};

export default SignInForm;