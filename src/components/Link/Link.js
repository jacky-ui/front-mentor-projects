function Links({ linkClass, linkName, linkHref, ariaLabel }) {
    return(
        <a className={linkClass} href={linkHref} aria-label={ariaLabel}>{linkName}</a>
    )
};

export default Links;