import styles from "./it_technician_home_page.module.css";
import Navbar from "../../Components/Global/Navbar";

function IT_Technician_HomePage() {
    document.title = "IT Technician Home Page";

    let links = [{pageName : "View It Difficulties", pageLink : "/it_difficulties", iconPath : "./Home_Page_Icons/It_Technician/computer-solid.svg"},
    {pageName : "Create User", pageLink : "/it_user_creation", iconPath : "./Home_Page_Icons/It_Technician/user-plus-solid.svg"}]

    return (
        <>
            <Navbar homePageTitle="IT Technician Home Page" homePageLink="/it_technician_home_page" links={links}/>
            <div className={styles.mainContainer}>
                <h1>Home</h1>
            </div>
        </>
    )
}

export default IT_Technician_HomePage;