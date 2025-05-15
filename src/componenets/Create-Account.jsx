'use client';

import { auth } from '../lib/firebase'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  Paper,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CreateAccountForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '', confirmPassword: '' });

  const validate = () => {
    let tempErrors = { email: '', password: '', confirmPassword: '' };
    if (!email) tempErrors.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) tempErrors.email = 'Invalid email';

    if (!password) tempErrors.password = 'Required';
    if (!confirmPassword) tempErrors.confirmPassword = 'Required';
    else if (password !== confirmPassword) tempErrors.confirmPassword = 'Passwords do not match';

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User signed up:', user.email);
      router.push('/');
    } catch (error) {
      console.error('Sign up failed:', error.code, error.message);
      setErrors((prev) => ({
        ...prev,
        password: error.message,
      }));
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Lexend, sans-serif',
      }}
    >
      <Paper
        elevation={3}
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: 4,
          width: '100%',
          maxWidth: 360,
          borderRadius: 2,
          backgroundColor: 'var(--color-parchment)',
        }}
      >
        <Typography id="create-account" variant="h4" mb={3} color="var(--color-umber)">
          Create Account
        </Typography>

        {/* Email Field */}
        <TextField
          label="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={Boolean(errors.email)}
          helperText={errors.email}
          fullWidth
          margin="normal"
          type="email"
          required
          InputLabelProps={{ style: { color: 'var(--color-mushroom)' } }}
          sx={{
            input: { color: 'var(--color-umber)' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'var(--color-umber)' },
              '&:hover fieldset': { borderColor: 'var(--color-terracotta)' },
              '&.Mui-focused fieldset': { borderColor: 'var(--color-terracotta)' },
            },
          }}
        />

        {/* Password Field */}
        <TextField
          label="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={Boolean(errors.password)}
          helperText={errors.password}
          fullWidth
          margin="normal"
          type={showPassword ? 'text' : 'password'}
          required
          InputLabelProps={{ style: { color: 'var(--color-mushroom)' } }}
          sx={{
            input: { color: 'var(--color-umber)' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'var(--color-umber)' },
              '&:hover fieldset': { borderColor: 'var(--color-terracotta)' },
              '&.Mui-focused fieldset': { borderColor: 'var(--color-terracotta)' },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                  aria-label="toggle password visibility"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Confirm Password Field */}
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={Boolean(errors.confirmPassword)}
          helperText={errors.confirmPassword}
          fullWidth
          margin="normal"
          type={showPassword ? 'text' : 'password'}
          required
          InputLabelProps={{ style: { color: 'var(--color-mushroom)' } }}
          sx={{
            input: { color: 'var(--color-umber)' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'var(--color-umber)' },
              '&:hover fieldset': { borderColor: 'var(--color-terracotta)' },
              '&.Mui-focused fieldset': { borderColor: 'var(--color-terracotta)' },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                  aria-label="toggle confirm password visibility"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          sx={{
            mt: 1,
            mb: 2,
            backgroundColor: 'var(--color-terracotta)',
            '&:hover': {
              backgroundColor: 'var(--color-sage)',
            },
          }}
        >
          Create Account
        </Button>

        <Accordion sx={{ mt: 3 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color="var(--color-umber)">Need Help?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={1}>
              <Link href="/login" sx={{ color: 'var(--color-umber)' }}>
                Already have an account? Sign In
              </Link>
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Box>
  );
}
