"use client";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Thought Gym
        </Typography>
        <Button color="inherit">Sign Up</Button>
        <Button color="inherit">Log In</Button>
        <Button color="inherit">Log Out</Button>
      </Toolbar>
    </AppBar>
  );
}