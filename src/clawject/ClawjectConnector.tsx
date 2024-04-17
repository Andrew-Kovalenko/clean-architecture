import React, { createContext, memo, useContext } from 'react';

import autoBind from 'auto-bind';
import { observer } from 'mobx-react';
import { useAsync } from 'react-use'

export class Connector<Context extends object> {
    private context?: React.Context<Context>;

    private bindContext(context: Context): void {
        Object.values(context).forEach((it) => {
            if (typeof it === 'object') {
                autoBind(it);
            }
        });
    }

    Provider: React.FC<{ context: () => Promise<Context>, children: React.ReactNode | undefined }> = memo(({ children, context }) => {
        const { loading, error, value } = useAsync(context);

        if (loading || error) {
            return null;
        }

        this.bindContext(value);

        if (!this.context) {
            this.context = createContext(value);
        }

        return <this.context.Provider value={value}>{children}</this.context.Provider>;
    });

    connect = <TProps extends Partial<Context>>(
        Component: React.ComponentType<TProps>,
    ): React.ComponentType<Omit<TProps, keyof Context>> => {
        const ObserverComponent = observer(Component);

        return (ownProps: Omit<TProps, keyof Context>): JSX.Element | null => {
            if (!this.context) {
                return null;
            }

            const props = useContext(this.context!) as unknown as TProps;

            return <ObserverComponent {...props} {...ownProps} />;
        };
    };
}
