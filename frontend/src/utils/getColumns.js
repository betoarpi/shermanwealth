export function getTwoColumns (normal, preview) {
  return {
    columnLeft: normal !== undefined ? normal.column_left : preview.columnLeft,
    columnRight: normal !== undefined ? normal.column_right : preview.columnRight,
  }
}

export function getThreeColumns (normal, preview) {
  return {
    columnLeft: normal !== undefined ? normal.column_left : preview.columnLeft,
    columnRight: normal !== undefined ? normal.column_right : preview.columnRight,
    columnMiddle: normal !== undefined ? normal.column_middle : preview.columnMiddle,
  }
}

export function getFourColumns (normal, preview) {
  return {
    columnLeft: normal !== undefined ? normal.column_left : preview.columnLeft,
    columnRight: normal !== undefined ? normal.column_right : preview.columnRight,
    columnMiddleLeft: normal !== undefined ? normal.column_middle_left : preview.columnMiddleLeft,
    columnMiddleRight: normal !== undefined ? normal.column_middle_right : preview.columnMiddleRight,
  }
}
