function Links({ linkClass, linkName, linkHref }) {
    return(
        <a className={linkClass} href={linkHref}>{linkName}</a>
    )
};

export default Links;