import React from 'react'
import { TwoColumns, ThreeClumns, FourColumns } from './styles.js'

export const TwoColumnsBlock = ({ two_columns }) => {
  return (
    <TwoColumns>
      <div dangerouslySetInnerHTML={{ __html: two_columns.column_left }} />
      <div dangerouslySetInnerHTML={{ __html: two_columns.column_right }} />
    </TwoColumns>
  );
};

export const ThreeColumnsBlock = ({ three_columns_block }) => {
  return (
    <ThreeClumns>
      <div dangerouslySetInnerHTML={{ __html: three_columns_block.column_left }} />
      <div dangerouslySetInnerHTML={{ __html: three_columns_block.column_middle }} />
      <div dangerouslySetInnerHTML={{ __html: three_columns_block.column_right }} />
    </ThreeClumns>
  );
}

export const FourColumnsBlock = ({ four_columns_block }) => {
  return (
    <FourColumns>
      <div dangerouslySetInnerHTML={{ __html: four_columns_block.column_left }} />
      <div dangerouslySetInnerHTML={{ __html: four_columns_block.column_middle_left }} />
      <div dangerouslySetInnerHTML={{ __html: four_columns_block.column_middle_right }} />
      <div dangerouslySetInnerHTML={{ __html: four_columns_block.column_right }} />
    </FourColumns>
  );
}
