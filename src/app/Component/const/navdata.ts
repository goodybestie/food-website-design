export interface ListProps{
    label:string;
    href:string;
}

export const List: ListProps[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/aboutpage" },
    { label: "Menu", href: "/menupage" },
    { label: "Page", href: "/blogpage" },
    { label: "Contact", href: "/contactpage" }
];