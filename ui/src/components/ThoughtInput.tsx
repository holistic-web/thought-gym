"use client";
import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import styles from "@/styles/ThoughtInput.module.css";

export default function ThoughtInput() {
  const [thought, setThought] = useState("");
  const [thoughts, setThoughts] = useState<string[]>([]);

  const addThought = () => {
    if (thought.trim() !== "") {
      setThoughts([...thoughts, thought]);
      setThought(""); // Clear input after submitting
    }
  };

  return (
    <Box className={styles.container}>
      <Typography variant="h6" className="Title">What's on your mind?</Typography>
      <TextField
        fullWidth
        multiline
        rows={3}
        variant="outlined"
        value={thought}
        onChange={(e) => setThought(e.target.value)}
        placeholder="Type your thought here..."
        className={styles.inputField}
      />
      <Button variant="contained" color="primary" onClick={addThought}>
        Save Thought
      </Button>

      {/* Display Thoughts */}
      <Box>
        <Typography variant="subtitle1">Your Thoughts:</Typography>
        {thoughts.map((t, index) => (
          <Typography key={index} className={styles.thoughtItem}>
            {t}
          </Typography>
        ))}
      </Box>

    </Box>
  );
}