function changeBurger(){
    const burger = document.getElementById("icon-hamburger-id");

    if(burger.classList.contains("icon-hamburger")){
        burger.classList.remove("icon-hamburger");
        burger.classList.add("icon-hamburger-x")
    }else{
        burger.classList.remove("icon-hamburger-x")
        burger.classList.add("icon-hamburger");
    }
}

function showMobileMenu(){
    const sprawdz = document.getElementsByClassName("menuMobileDiv");
    changeBurger();

    if(sprawdz.length === 0){
        const menuDiv = document.createElement("div");
        menuDiv.classList.add("menuMobileDiv");
        menuDiv.id = "menuMobileID";

        const firstMenu = document.createElement("div");
        firstMenu.classList.add("firstMenu");
        firstMenu.id = "firstMenuID";

        const productDiv = document.createElement("div");
        productDiv.classList.add("productDiv");
        productDiv.id = "productDiv";
        productDiv.onclick = (ev) => expandMenu(ev);
        const product = document.createElement("p");
        product.innerHTML = "Product";
        product.classList.add("productP");
        product.id = "productPID"
        const productArrow = document.createElement("img");
        productArrow.src = "./images/icon-arrow-dark.svg";
        productArrow.classList.add("productArrow");
        productArrow.id = "productArrowID";

        productDiv.appendChild(product);
        productDiv.appendChild(productArrow);
        firstMenu.appendChild(productDiv)

        const companyDiv = document.createElement("div");
        companyDiv.classList.add("productDiv");
        companyDiv.id = "companyDiv";
        companyDiv.onclick = (ev) => expandMenu(ev);
        const company = document.createElement("p");
        company.innerHTML = "Company";
        company.classList.add("productP");
        company.id = "companyPID";
        const companyArrow = document.createElement("img");
        companyArrow.src = "./images/icon-arrow-dark.svg";
        companyArrow.classList.add("productArrow");
        companyArrow.id = "companyArrowID"

        companyDiv.appendChild(company);
        companyDiv.appendChild(companyArrow);
        firstMenu.appendChild(companyDiv);

        const connectDiv = document.createElement("div");
        connectDiv.classList.add("productDiv");
        connectDiv.id = "connectDiv";
        connectDiv.onclick = (ev) => expandMenu(ev);
        const connect = document.createElement("p");
        connect.innerHTML = "Connect";
        connect.classList.add("productP");
        connect.id = "connectPID"
        const connectArrow = document.createElement("img");
        connectArrow.src = "./images/icon-arrow-dark.svg";
        connectArrow.classList.add("productArrow");
        connectArrow.id = "connectArrowID";

        connectDiv.appendChild(connect);
        connectDiv.appendChild(connectArrow);
        firstMenu.appendChild(connectDiv);

        const loginDiv = document.createElement("div");
        loginDiv.classList.add("mobile-login-form");

        const logBtn = document.createElement("button");
        logBtn.classList.add("login-button");
        logBtn.innerText = "Login";
        const signBtn = document.createElement("button");
        signBtn.innerText = "Sign Up";
        signBtn.classList.add("sign-in-button");

        loginDiv.appendChild(logBtn);
        loginDiv.appendChild(signBtn);

        const secondMenu = document.createElement("div");
        secondMenu.classList.add("secondMenu");
        secondMenu.id = "secondMenuID";

        secondMenu.appendChild(loginDiv);

        menuDiv.appendChild(firstMenu);
        menuDiv.appendChild(secondMenu);

        const elem = document.getElementById("headerM");
        elem.appendChild(menuDiv);
    }else{
        const elem = document.getElementById("menuMobileID");
        elem.remove();
    }

}

function expandMenu(ev){
    if(ev.target.id === "productDiv" || ev.target.id === "productPID" || ev.target.id === "productArrowID"){
        const sprawdz = document.getElementsByClassName("expandedDivProduct");
        if(sprawdz.length === 0){
        const newDiv = document.createElement("div");
        newDiv.classList.add("expandedDiv");
        newDiv.classList.add("expandedDivProduct");
        newDiv.id = "expandedProduct";

        const overviewA = document.createElement("a");
        overviewA.innerHTML = "Overview";
        overviewA.href ="#";
        newDiv.appendChild(overviewA);
        const pricingA = document.createElement("a");
        pricingA.innerHTML = "Pricing";
        pricingA.href ="#";
        newDiv.appendChild(pricingA);
        const marketplaceA = document.createElement("a");
        marketplaceA.innerHTML = "Marketplace";
        marketplaceA.href ="#";
        newDiv.appendChild(marketplaceA);
        const featuresA = document.createElement("a");
        featuresA.innerHTML = "Features";
        featuresA.href ="#";
        newDiv.appendChild(featuresA);
        const integrationsA = document.createElement("a");
        integrationsA.innerHTML = "Integrations";
        integrationsA.href ="#";
        newDiv.appendChild(integrationsA);

        const elem = document.getElementById("productDiv");
        elem.appendChild(newDiv);
        }else{
            const elem = document.getElementById("expandedProduct");
            elem.remove();
        }
    }else if(ev.target.id === "companyDiv" || ev.target.id === "companyPID" || ev.target.id === "companyArrowID"){

        const sprawdz = document.getElementsByClassName("expandedDivProduct");
        if(sprawdz.length === 0){
        const newDiv = document.createElement("div");
        newDiv.classList.add("expandedDiv");
        newDiv.classList.add("expandedDivProduct");
        newDiv.id = "expandedProduct";

        const aboutA = document.createElement("a");
        aboutA.innerHTML = "About";
        aboutA.href ="#";
        newDiv.appendChild(aboutA);

        const teamA = document.createElement("a");
        teamA.innerHTML = "Team";
        teamA.href ="#";
        newDiv.appendChild(teamA);

        const blogA = document.createElement("a");
        blogA.innerHTML = "Blog";
        blogA.href ="#";
        newDiv.appendChild(blogA);

        const careersA = document.createElement("a");
        careersA.innerHTML = "Careers";
        careersA.href ="#";
        newDiv.appendChild(careersA);

        const elem = document.getElementById("companyDiv");
        elem.appendChild(newDiv);
        }else{
            const elem = document.getElementById("expandedProduct");
            elem.remove();
        }

    }
    else if(ev.target.id === "connectDiv" || ev.target.id === "connectPID" || ev.target.id === "connectArrowID"){

        const sprawdz = document.getElementsByClassName("expandedDivProduct");
        if(sprawdz.length === 0){
            const newDiv = document.createElement("div");
            newDiv.classList.add("expandedDiv");
            newDiv.classList.add("expandedDivProduct");
            newDiv.id = "expandedProduct";

            const contactA = document.createElement("a");
            contactA.innerHTML = "Contact";
            contactA.href ="#";
            newDiv.appendChild(contactA);

            const newsletterA = document.createElement("a");
            newsletterA.innerHTML = "Newsletter";
            newsletterA.href ="#";
            newDiv.appendChild(newsletterA);

            const linkedinA = document.createElement("a");
            linkedinA.innerHTML = "LinkedIn";
            linkedinA.href ="#";
            newDiv.appendChild(linkedinA);

            const elem = document.getElementById("connectDiv");
            elem.appendChild(newDiv);
        }else{
            const elem = document.getElementById("expandedProduct");
            elem.remove();
        }

    }
}

function showAllMenu(type){

    if(type === "menuProduct"){
        if(!document.getElementById("menuProductDekstopID")){
            const divMenu = document.createElement("div");
            divMenu.className = "menuProductDekstop";
            divMenu.id = "menuProductDekstopID";

            const pOverview = document.createElement("p");
            pOverview.innerText = "Overview";
            pOverview.classList = "pTextMenuDesktop";

            const pPricing = document.createElement("p");
            pPricing.innerText = "Pricing";
            pPricing.classList = "pTextMenuDesktop";

            const pMarketplace = document.createElement("p");
            pMarketplace.innerText = "Marketplace";
            pMarketplace.classList = "pTextMenuDesktop";

            const pFeatures = document.createElement("p");
            pFeatures.innerText = "Features";
            pFeatures.classList = "pTextMenuDesktop";

            const pIntegrations = document.createElement("p");
            pIntegrations.innerText = "Integrations";
            pIntegrations.classList = "pTextMenuDesktop";

            divMenu.appendChild(pOverview);
            divMenu.appendChild(pPricing);
            divMenu.appendChild(pMarketplace);
            divMenu.appendChild(pFeatures);
            divMenu.appendChild(pIntegrations);


            const doc = document.getElementById("singleMenuProduct");
            doc.appendChild(divMenu);
        }
        else{
            const elem = document.getElementById("menuProductDekstopID");
            elem.remove();
        }
    }else if(type === "menuCompany"){
        if(!document.getElementById("menuProductDekstopID")){
            const divMenu = document.createElement("div");
            divMenu.className = "menuProductDekstop";
            divMenu.id = "menuProductDekstopID";

            const pAbout = document.createElement("p");
            pAbout.innerText = "About";
            pAbout.classList = "pTextMenuDesktop";

            const pTeam = document.createElement("p");
            pTeam.innerText = "Team";
            pTeam.classList = "pTextMenuDesktop";

            const pBlog = document.createElement("p");
            pBlog.innerText = "Blog";
            pBlog.classList = "pTextMenuDesktop";

            const pCareers = document.createElement("p");
            pCareers.innerText = "Careers";
            pCareers.classList = "pTextMenuDesktop";

            divMenu.appendChild(pAbout);
            divMenu.appendChild(pTeam);
            divMenu.appendChild(pBlog);
            divMenu.appendChild(pCareers);


            const doc = document.getElementById("singleMenuCompany");
            doc.appendChild(divMenu);
        }
        else{
            const elem = document.getElementById("menuProductDekstopID");
            elem.remove();
        }
    }else if(type === "menuContent"){
        if(!document.getElementById("menuProductDekstopID")){
            const divMenu = document.createElement("div");
            divMenu.className = "menuProductDekstop";
            divMenu.id = "menuProductDekstopID";

            const pContact = document.createElement("p");
            pContact.innerText = "Contact";
            pContact.classList = "pTextMenuDesktop";

            const pNewsletter = document.createElement("p");
            pNewsletter.innerText = "Newsletter";
            pNewsletter.classList = "pTextMenuDesktop";

            const pLinkedIn = document.createElement("p");
            pLinkedIn.innerText = "LinkedIn";
            pLinkedIn.classList = "pTextMenuDesktop";


            divMenu.appendChild(pContact);
            divMenu.appendChild(pLinkedIn);
            divMenu.appendChild(pLinkedIn);


            const doc = document.getElementById("singleMenuContent");
            doc.appendChild(divMenu);
        }
        else{
            const elem = document.getElementById("menuProductDekstopID");
            elem.remove();
        }
    }


}
