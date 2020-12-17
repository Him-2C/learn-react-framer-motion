// import {AnimateSharedLayout} from 'framer-motion';
import React from 'react';
import {useFela} from 'react-fela';
import {items} from './mock/data';
import FlatListItem from './components/FlatList';
import CardItem from './components/CardItem';
import CardOpen from './components/CardOpen';
import {AnimatePresence, AnimateSharedLayout} from 'framer-motion';

type IState = {
  id: string;
  category: string;
  title: string;
  pointOfInterest: number;
  backgroundColor: string;
}

const AppContainer: React.FC = () => {
  const styles = createSylesSheet();
  const [itemSelected, setItemSelected] = React.useState<IState>(null);

  return (
    <div className={styles.PageContainer}>
      <div className={styles.ContentContainer}>
        <AnimateSharedLayout type="crossfade">
          <FlatListItem
            data={items}
            keyExtractor={(item) => `${item.id}`}
            renderItem={(item) => (
              <div
                className={styles.ItemContainer}
                onClick={() => setItemSelected(item)}
              >
                <CardItem item={item} />
              </div>
            )}
          />
          <AnimatePresence>
            {itemSelected && <CardOpen item={itemSelected} onClick={() => setItemSelected(null)} />}
          </AnimatePresence>
        </AnimateSharedLayout>
      </div>
    </div>
  );
};

const createSylesSheet = () => {
  const {css} = useFela();

  return ({
    PageContainer: css({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }),
    ContentContainer: css({
      width: '100%',
      maxWidth: '1024px',
    }),
    ItemContainer: css({
      width: '100%',
    }),
  });
};

export default AppContainer;
