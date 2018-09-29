export const style = (prop, css, fallback) => (props) => {
  const value = props[prop];

  if (!value) {
    if (fallback) {
      return `${css}: ${fallback}`;
    }
    return null;
  }

  return `${css}: ${value}`;
};

// export const # = style('#', '#');
// export const #$ = style('#$', '#-$');

export const display = style('display', 'display', 'flex');
export const flex = style('flex', 'flex');
export const flexBasis = style('flexBasis', 'flex-basis');
export const flexDirection = style('flexDirection', 'flex-direction');

export const border = style('border', 'border');
export const color = style('color', 'color', 'inherit');
export const backgroundColor = style('backgroundColor', 'background-color');
export const borderRadius = style('borderRadius', 'border-radius');
export const opacity = style('opacity', 'opacity');
export const visibility = style('visibility', 'visibility');

export const fontWeight = style('fontWeight', 'font-weight');
export const fontSize = style('fontSize', 'font-size', '14px');

export const margin = style('margin', 'margin');
export const padding = style('padding', 'padding');
export const width = style('width', 'width');
export const maxWidth = style('maxWidth', 'max-width');
export const height = style('height', 'height');
export const maxHeight = style('maxHeight', 'max-height');

export const alignSelf = style('alignSelf', 'align-self');
export const alignItems = style('alignItems', 'align-items');
export const alignContent = style('alignContent', 'align-content');

export const justifySelf = style('justifySelf', 'justify-self');
export const justifyItems = style('justifyItems', 'justify-items');
export const justifyContent = style('justifyContent', 'justify-content');

export const zIndex = style('zIndex', 'z-index');
export const boxShadow = style('boxShadow', 'box-shadow');

export const top = style('top', 'top', 'inherit');
export const right = style('right', 'right', 'inherit');
export const bottom = style('bottom', 'bottom', 'inherit');
export const left = style('left', 'left', 'inherit');

export const cursor = style('cursor', 'cursor');
export const position = style('position', 'position', 'relative');
