import React from 'react'
import { getTwoColumns, getThreeColumns, getFourColumns } from '../../utils/getColumns'
import { TwoColumns, ThreeClumns, FourColumns } from './styles.js'

export const TwoColumnsBlock = ({ two_columns, twoColumns }) => {
  const columns = getTwoColumns(two_columns, twoColumns)
  return (
    <TwoColumns>
      <div dangerouslySetInnerHTML={{ __html: columns.columnLeft }} />
      <div dangerouslySetInnerHTML={{ __html: columns.columnRight }} />
    </TwoColumns>
  )
};

export const ThreeColumnsBlock = ({ three_columns_block, threeColumnsBlock }) => {
  const columns = getThreeColumns(three_columns_block, threeColumnsBlock)
  return (
    <ThreeClumns>
      <div dangerouslySetInnerHTML={{ __html: columns.columnLeft }} />
      <div dangerouslySetInnerHTML={{ __html: columns.columnMiddle }} />
      <div dangerouslySetInnerHTML={{ __html: columns.columnRight }} />
    </ThreeClumns>
  );
}

export const FourColumnsBlock = ({ four_columns_block, fourColumnsBlock }) => {
  const columns = getFourColumns(four_columns_block, fourColumnsBlock)
  return (
    <FourColumns>
      <div dangerouslySetInnerHTML={{ __html: columns.columnLeft }} />
      <div dangerouslySetInnerHTML={{ __html: columns.columnMiddleLeft }} />
      <div dangerouslySetInnerHTML={{ __html: columns.columnMiddleRight }} />
      <div dangerouslySetInnerHTML={{ __html: columns.columnRight }} />
    </FourColumns>
  );
}
