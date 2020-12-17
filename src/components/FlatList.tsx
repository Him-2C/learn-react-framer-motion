import React from 'react';
import {useFela} from 'react-fela';

type Props<ItemT> = {
  data: ReadonlyArray<ItemT>
  keyExtractor: (item: ItemT, index: number) => string;
  renderItem: (item: ItemT) => JSX.Element;
};

function FlatListItem<ItemT>(props: Props<ItemT>) {
  const styles = createSylesSheet();
  return (
    <ul className={styles.FlatContainer}>
      {props.data.map((item, index) => (
        <li
          key={props.keyExtractor(item, index)}
          className={[
            styles.ListItem,
            ((index % 4) === 0 || (index % 4) === 3) && styles.ListSpacialSpace,
          ].join(' ')}
        >
          {props.renderItem(item)}
        </li>
      ))
      }
    </ul>
  );
};


const createSylesSheet = () => {
  const {css} = useFela();

  return ({
    FlatContainer: css({
      display: 'flex',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: 0,
      margin: 0,
      marginLeft: '-1rem',
    }),
    ListItem: css({
      paddingLeft: '1rem',
      paddingBottom: '1rem',
      width: '100%',
      nested: {
        '@media screen and (min-width: 768px)': {
          width: '35%',
        },
      },
    }),
    ListSpacialSpace: css({
      nested: {
        '@media screen and (min-width: 768px)': {
          width: '65%',
        },
      },
    }),
  });
};

export default FlatListItem;
