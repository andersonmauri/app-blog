import react from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Detail from './pages/Detail/index';
import CategoryPosts from './pages/Category'
import Search from './pages/Search/index';

const Stack = createNativeStackNavigator();

function Routes() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name='Detail'
                component={Detail}
                options={{
                    title: 'Detalhes',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#232630'
                    }
                }}
            />

            <Stack.Screen
                name='Category'
                component={CategoryPosts}

                options={{
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#232630'
                    }
                }}
            />

            <Stack.Screen
                name='Search'
                component={Search}

                options={{
                    title: 'Procurando Algo',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#232630'
                    }
                }}
            />



        </Stack.Navigator>
    )
}

export default Routes;