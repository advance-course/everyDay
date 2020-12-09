interface STYLE {
  [typs: string]: string | Object;
}

const THEME: STYLE = {
  primary: '#07c160',
  info: '#1890ff',
  warning: '#ff976a',
  danger: '#ff4d4f',
};

const SIZEHEIGHT: STYLE = {
  normal: 44,
  small: 32,
  mini: 24,
};

const SHADOW = {
  shadowColor: '#999',
  shadowOffset: {width: 0, height: 0},
  shadowOpacity: 1,
  shadowRadius: 1.5,
  elevation: 1,
};

const SIZE: STYLE = {
  normal: {
    paddingHorizontal: 15,
    lineHeight: SIZEHEIGHT.normal,
    fontSize: 14,
  },
  small: {
    paddingHorizontal: 8,
    lineHeight: SIZEHEIGHT.small,
    fontSize: 12,
  },
  mini: {
    paddingHorizontal: 4,
    lineHeight: SIZEHEIGHT.mini,
    fontSize: 10,
  },
};

const defaultStyle = {
  ...SHADOW,
  backgroundColor: '#fff',
  borderColor: '#ebedf0',
  borderWidth: 1,
  opacity: 1,
  borderRadius: 0,
  height: 44,
  color: '#000',
  paddingHorizontal: 15,
  lineHeight: 44,
  fontSize: 14,
};

const tileToObject = (style: object) => {
  let tempObject = {};
  if (Array.isArray(style)) {
    Object.assign(tempObject, ...style);
  } else {
    Object.assign(tempObject, style);
  }
  return tempObject;
};

export function combineTheme(
  type: string,
  plain: boolean,
  disabled: boolean,
  round: boolean,
  size: string,
  style: object,
): STYLE {
  let combineStyle = {};
  let themes = [];
  if (THEME[type]) {
    let theme = {
      backgroundColor: THEME[type],
      borderColor: THEME[type],
      color: '#fff',
    };
    themes.push(theme);
  }
  if (plain) {
    let theme = {
      backgroundColor: '#fff',
      color: THEME[type],
    };
    themes.push(theme);
  }
  if (disabled) {
    let theme = {
      opacity: 0.5,
      borderWidth: 0,
    };
    themes.push(theme);
  }

  if (round) {
    let theme = {
      borderRadius: 30,
    };
    themes.push(theme);
  }

  if (size) {
    let theme = {
      height: SIZEHEIGHT[size],
      ...(SIZE[size] as Object),
    };
    themes.push(theme);
  }
  combineStyle = Object.assign(
    {},
    defaultStyle,
    ...themes,
    tileToObject(style),
  );

  return combineStyle;
}
