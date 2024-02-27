import { useContext } from 'react';
import { ContextQuiosco } from '../context';

const useProviderQuiosco = () => {
    return useContext(ContextQuiosco);
}

export default useProviderQuiosco;