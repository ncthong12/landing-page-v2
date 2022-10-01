// types
import { ConfigProps } from 'types/config';

// basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
// like '/berry-material-react/react/default'
export const BASE_PATH = '';

export const DASHBOARD_PATH = '/dashboard/default';

const config: ConfigProps = {
    fontFamily: `'Roboto', sans-serif`,
    borderRadius: 10,
    outlinedFilled: true,
    navType: 'dark', // light, dark
    presetColor: 'theme6', // default, theme1, theme2, theme3, theme4, theme5, theme6
    locale: 'en', // 'en' - English, 'fr' - French, 'ro' - Romanian, 'zh' - Chinese
    rtlLayout: false,
    container: false,
};

export default config;
