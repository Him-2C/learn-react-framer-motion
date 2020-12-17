import {motion} from 'framer-motion';
import React from 'react';
import {useFela} from 'react-fela';

type Props ={
  item: {
    id: string,
    category: string,
    title: string;
    pointOfInterest: number,
    backgroundColor: string,
  }
}

const CardItem: React.FC<Props> = (props) => {
  const styles = createSylesSheet();

  return (
    <div className={styles.CardContentContainer}>
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
      position: 'relative',
      width: '100%',
      height: '460px',
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
    }),
    CardImage: css({
      height: '100%',
      width: 'auto',
      objectFit: 'cover',
    }),
  });
};

export default CardItem;
