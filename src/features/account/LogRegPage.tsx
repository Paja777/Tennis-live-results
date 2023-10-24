import { LoadingButton } from '@mui/lab';
import { Container, Paper, Avatar, Typography, Box, TextField, Grid } from '@mui/material';
import { useNavigate, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../store/configureStore';
import { FieldValues, useForm } from 'react-hook-form';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { setUser } from './accountSlice';
import { changeTextSliderColor } from '../mainMatch/mainMatchSlice';

const LogRegPage = () => {
 
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    dispatch(changeTextSliderColor('blue'));
    const {register, handleSubmit, formState: {isSubmitting, errors, isValid}} = useForm({
        mode: 'all'
    });

    async function submitForm(data: FieldValues) {
      try {
        await dispatch(setUser(data));
        console.log(data);
        navigate('/listpage');
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <Container
      component={Paper}
      elevation={10}
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 4,
        mt: 2
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(submitForm)}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          fullWidth
          label="Username"
          autoFocus
          {...register("username", {required: 'Username is required'})}
          error={!!errors.username} //!! castuje username u boolean, ako postoji onda je true, ako ne false
          helperText={errors?.username?.message as string}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Email"
          autoFocus
          {...register("email", {required: 'Email is required'})}
          error={!!errors.email} //!! castuje username u boolean, ako postoji onda je true, ako ne false
          helperText={errors?.email?.message as string}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Password"
          type="password"
          {...register("password", {required: 'Password is required'})}
          error={!!errors.password}
          helperText={errors?.password?.message as string}
        />
        <LoadingButton
          loading={isSubmitting}
          disabled={!isValid}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign up
        </LoadingButton>
      </Box>
    </Container>
  )
}

export default LogRegPage