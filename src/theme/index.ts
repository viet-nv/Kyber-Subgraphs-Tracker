const theme = {
  primary: 'var(--colors-primary)',
  text: 'var(--colors-text)',
  subText: 'var(--colors-sub-text)',
  link: 'var(--colors-link)',
  bg1: 'var(--colors-bg1)',
  bg2: 'var(--colors-bg2)',
  border: 'var(--colors-border)',
  boxShadow: 'var(--box-shadow)',
}

const breakpoints = {
  small: 576,
  medium: 768,
  large: 992,
  extraLarge: 1200,
} as const

type BreakPoint = keyof typeof breakpoints

const mediaQueries = (Object.keys(breakpoints) as BreakPoint[]).reduce(
  (mq, key) => {
    return {
      ...mq,
      [key]: `@media (min-width: ${breakpoints[key]}px)`,
    }
  },
  {} as { [key in BreakPoint]: string }
)

export { theme, mediaQueries }
