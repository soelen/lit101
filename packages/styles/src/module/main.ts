
import variables from './_variables.module.scss';

const breakpoints = {
  xs: {
    start: variables[ 'breakpoint-xs-start' ],
    end: variables[ 'breakpoint-xs-start' ],
  },
  sm: {
    start: variables[ 'breakpoint-sm-start' ],
    end: variables[ 'breakpoint-sm-start' ],
  },
  md: {
    start: variables[ 'breakpoint-md-start' ],
    end: variables[ 'breakpoint-md-start' ],
  },
  lg: {
    start: variables[ 'breakpoint-lg-start' ],
    end: variables[ 'breakpoint-lg-start' ],
  },
  xl: {
    start: variables[ 'breakpoint-xl-start' ],
    end: variables[ 'breakpoint-xl-start' ],
  },
}

const mediaQueries = {
  xsAndSm: `(min-width: ${ variables[ 'breakpoint-xs-start' ] }) and (max-width: ${ variables[ 'breakpoint-xs-end' ]})`,
  smAndMd: `(min-width: ${ variables[ 'breakpoint-sm-start' ] }) and (max-width: ${ variables[ 'breakpoint-sm-end' ]})`,
  mdAndLg: `(min-width: ${ variables[ 'breakpoint-md-start' ] }) and (max-width: ${ variables[ 'breakpoint-md-end' ]})`,
  lgAndXl: `(min-width: ${ variables[ 'breakpoint-lg-start' ] }) and (max-width: ${ variables[ 'breakpoint-lg-end' ]})`,
  xlAndBeyond: `(min-width: ${ variables[ 'breakpoint-xl-start' ] })`,

  mobile: `(min-width: ${ variables[ 'breakpoint-xs-start' ] }) and (max-width: ${ variables[ 'breakpoint-xs-end' ]})`,
  tablet: `(min-width: ${ variables[ 'breakpoint-sm-start' ] }) and (max-width: ${ variables[ 'breakpoint-md-end' ]})`,
  desktop: `(min-width: ${ variables[ 'breakpoint-lg-start' ] })`,
}

type Elevation = '10' | '30' | '50' | '70' | '90';

export type {
  Elevation,
}

export {
  breakpoints,
  mediaQueries,
  variables,
}
