import { Connector } from 'clawject/ClawjectConnector'
import { IProfileContext } from 'profiles/ui/connect/IProfileContext'

export const {
    Provider,
    connect,
} = new Connector<IProfileContext>();
