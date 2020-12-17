import React from 'react';
import {useFela} from 'react-fela';
import {motion} from 'framer-motion';

type Props ={
  item: {
    id: string,
    category: string,
    title: string;
    pointOfInterest: number,
    backgroundColor: string,
  }
  onClick: () => void;
}

const CardOpen: React.FC<Props> = (props) => {
  const styles = createSylesSheet();
  return (
    <div
      className={styles.CardContentContainer}
      onClick={props.onClick}
    >
      <motion.div
        layoutId={`card-content-${props.item.id}`}
        className={styles.CardContent}
      >
        <motion.div
          layoutId={`card-image-container-${props.item.id}`}
          className={styles.CardImageContainer}
        >
          <img
            src={`/images/${props.item.id}.jpg`}
            className={styles.CardImage}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

const createSylesSheet = () => {
  const {css} = useFela();

  return ({
    CardContentContainer: css({
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 1,
      width: '100%',
      height: '100%',
      padding: '40px',
    }),
    CardContent: css({
      position: 'relative',
      width: '100%',
      height: '100%',
      borderRadius: '1rem',
      backgroundColor: '#1C1C1E',
      overflow: 'hidden',
    }),
    CardImageContainer: css({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1,
    }),
    CardImage: css({
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    }),
  });
};

export default CardOpen;
