import MoreInfo from "@/moreinfopage/page";
import Headers from "../Component/headerpage/page";
import ContactPage1 from "../Component/contactpage1/page";

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