import MoreInfo from "@/app/contactpage/moreinfo";
import ContactPage1 from "./contactform";
import Headers from "../headerpage/Header";

const ContactPage = () => {
    return ( 
        <>
        <Headers h1="Contact Us" />
        <ContactPage1 />
        <MoreInfo />

        </>
     );
}
 
export default ContactPage;