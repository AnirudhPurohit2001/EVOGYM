import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: string) => void;
}

function ActionButton({ children, setSelectedPage }: Props) {
    return (
        <AnchorLink
            className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
            onClick={() => setSelectedPage('contactus')}
            href="#contactus">
            {children}
        </AnchorLink>
    )
}

export default ActionButton
