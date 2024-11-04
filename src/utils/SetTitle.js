import { useEffect } from 'react';

function useSetTitle(title) {
    useEffect(() => {
        document.title = title;
    }, [title]);
};

export default useSetTitle;