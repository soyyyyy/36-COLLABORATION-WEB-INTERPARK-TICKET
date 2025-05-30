import { useState } from 'react';
import * as styles from './ListInfo.css';
import ArrowUpIcon from '@/shared/assets/icon/ic_arrow_up_gray90_24.svg?react';
import ArrowDownIcon from '@/shared/assets/icon/ic_arrow_down_gray90_24.svg?react';

interface ListInfoProps {
  label: string;
  children?: React.ReactNode;
}

export default function ListInfo({ label, children }: ListInfoProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <button type="button" className={styles.listInfo} onClick={handleToggle}>
        <span className={styles.listInfoText}>{label}</span>
        <span className={styles.listInfoIcon}>
          {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </span>
      </button>
      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
}
