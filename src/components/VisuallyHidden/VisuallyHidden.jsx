import React from 'react';
import styles from './VisuallyHidden.module.css';

function VisuallyHidden({
  as: Element = 'span',
  className,
  children,
  ...delegated
}) {
  return (
    <Element
      className={styles.wrapper}
      {...delegated}
    >
      {children}
    </Element>
  );
}

export default VisuallyHidden;