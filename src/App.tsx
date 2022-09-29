// routing
import Routes from 'routes';
import ThemeCustomization from 'themes';
import NavigationScroll from 'layout/NavigationScroll';
import Locales from 'ui-component/Locales';
import RTLLayout from 'ui-component/RTLLayout';

// project imports

// auth provider

// import { AWSCognitoProvider as AuthProvider } from 'contexts/AWSCognitoContext';
// import { JWTProvider as AuthProvider } from 'contexts/JWTContext';
// import { Auth0Provider as AuthProvider } from 'contexts/Auth0Context';

// ==============================|| APP ||============================== //

const App = () => (
    <ThemeCustomization>
        <RTLLayout>
            <Locales>
                <NavigationScroll>
                    <Routes />
                </NavigationScroll>
            </Locales>
        </RTLLayout>
    </ThemeCustomization>
);

export default App;
