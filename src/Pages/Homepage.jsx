import React from "react";
import { Header, Footer, MainContent } from "../Components";
import Account from "../Components/Account";

const Homepage = () => {
    React.useEffect(() => {
        setTimeout(() => {
            const get_accountmodal = document.getElementById("account_modal");
            get_accountmodal.showModal();
            get_accountmodal.addEventListener("click", (e) => {
                const dialogDimensions =
                    get_accountmodal.getBoundingClientRect();
                if (
                    e.clientX < dialogDimensions.left ||
                    e.clientX > dialogDimensions.right ||
                    e.clientY < dialogDimensions.top ||
                    e.clientY > dialogDimensions.bottom
                ) {
                    get_accountmodal.close();
                }
            });
        }, 5000);
    });

    return (
        <>
            <Account />
            <Header />
            <MainContent />
            <Footer />
        </>
    );
};

export default Homepage;
