import { useState } from "react";
import styles from "./notesCard.module.css";

export const NotesCard = ({ note }) => {
  const saveNote = (e)=>{
    localStorage.setItem("note",e.target.value)
  }

  return (
    <div className={styles.notesCard}>
      <h3>All notes</h3>
      <textarea
        defaultValue={
          localStorage.getItem("note") || note
        }
        onMouseOut={saveNote}
      ></textarea>
    </div>
  );
};
