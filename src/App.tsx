import * as React from "react";

import './styles.css'
import ProfilesList from 'profiles/ui';
import { Provider } from 'profiles/ui/connect/connector'
import { ClawjectFactory } from '@clawject/di'
import { ProfileApplication } from 'profiles/context'

export const App: React.FC = () => {
    return (
    <Provider context={async() => {
        const context = await ClawjectFactory.createApplicationContext(ProfileApplication)
        return context.getExposedBeans();
    }}>
        <ProfilesList />
    </Provider>
    );
}
