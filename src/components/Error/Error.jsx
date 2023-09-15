
import React from 'react';
import styles from './Error.module.scss';

export const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <h1 className={styles.errorHeading}>Ошибка 404</h1>
      <p className={styles.errorMessage}>Запрашиваемая страница не найдена.</p>
    </div>
  );
};


