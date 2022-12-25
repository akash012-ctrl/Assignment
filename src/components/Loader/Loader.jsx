import React from 'react'
import BeatLoader from "react-spinners/BeatLoader";
import styles from './Loader.module.css'

const Loader = () => {
  return (
    <BeatLoader className={styles.spinner} color="#36d7b7" />
  )
}

export default Loader