import variables from './_variables.module.scss';
declare const breakpoints: {
    xs: {
        start: string;
        end: string;
    };
    sm: {
        start: string;
        end: string;
    };
    md: {
        start: string;
        end: string;
    };
    lg: {
        start: string;
        end: string;
    };
    xl: {
        start: string;
        end: string;
    };
};
declare const mediaQueries: {
    xsAndSm: string;
    smAndMd: string;
    mdAndLg: string;
    lgAndXl: string;
    xlAndBeyond: string;
    mobile: string;
    tablet: string;
    desktop: string;
};
type Elevation = '10' | '30' | '50' | '70' | '90';
export type { Elevation, };
export { breakpoints, mediaQueries, variables, };
