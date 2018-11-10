import React from 'react';
import {
  setDisplayName,
  wrapDisplayName,
} from 'recompact';

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

// template :)
// search and replace x q
// export const x = style('x', 'x');
// export const xQ = style('xQ', 'x-q');

export const position = style('position', 'position', 'relative');
export const color = style('color', 'color', 'inherit');
export const backgroundColor = style('backgroundColor', 'background-color');
export const borderRadius = style('borderRadius', 'border-radius');
export const opacity = style('opacity', 'opacity');
export const visibility = style('visibility', 'visibility');
export const display = style('display', 'display');

export const flexBasis = style('flexBasis', 'flex-basis');

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

export const identity = x => x;
export const get = (value, otherwise) => props => props[value] || otherwise;

// shorthard property
export const flex = (props) => {
  if (props.flex === false) { return null; }
  return `display: flex; flex: ${props.flex || '0 1 auto'}`;
};

export const between = insert => (comp1, comp2) => (
  <React.Fragment>
    {comp1}
    {insert}
    {comp2}
  </React.Fragment>
);

export const withProps = props => Component => <Component {...props} />;
export const without = keys => (obj) => {
  const Obj = { ...obj };

  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (const key of keys) {
    delete Obj[key];
  }

  return Obj;
};

export const fromRenderProps = (
  RenderPropsComponent,
  propsMapper,
  renderPropName = 'children'
) => (BaseComponent) => {
  const baseFactory = React.createFactory(BaseComponent);
  const renderPropsFactory = React.createFactory(RenderPropsComponent);

  const FromRenderProps = ownerProps =>
        renderPropsFactory({
          [renderPropName]: (...props) =>
            baseFactory({ ...ownerProps, ...propsMapper(...props) }),
        });

  if (process.env.NODE_ENV !== 'production') {
    return setDisplayName(wrapDisplayName(BaseComponent, 'fromRenderProps'))(
      FromRenderProps
    );
  }

  return FromRenderProps;
};

export const toRenderProps = (hoc) => {
  const RenderPropsComponent = props => props.children(props);
  return hoc(RenderPropsComponent);
};
