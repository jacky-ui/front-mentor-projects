import { useEffect } from "react";

function useSetBodyClass(bodyClass) {
    useEffect(() => {
        document.body.classList.add(bodyClass);

        return () => {
            document.body.classList.remove(bodyClass);
        };
    }, []);
};

export default useSetBodyClass;