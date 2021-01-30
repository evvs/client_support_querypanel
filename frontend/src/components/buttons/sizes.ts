export type StyledBtnSizeProp = {
  size?: string;
};

type ObjectWithSizes = { [key: string]: string };

export const paddingSizes: ObjectWithSizes = {
  s: '0.5rem 2rem',
  m: '0.7rem 4rem',
  l: '1rem 6rem',
};

export const fontSizes: ObjectWithSizes = {
  s: '0.7rem',
  m: '1rem',
  l: '1.5rem',
};
