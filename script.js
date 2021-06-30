function showMobileMenu(){
    const sprawdz = document.getElementsByClassName("menuMobileDiv");

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
        const companyArrow = document.createElement("img");
        companyArrow.src = "./images/icon-arrow-dark.svg";
        companyArrow.classList.add("productArrow");

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
        const connectArrow = document.createElement("img");
        connectArrow.src = "./images/icon-arrow-dark.svg";
        connectArrow.classList.add("productArrow");

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
    }else if(ev.target.id === "companyDiv" || ev.target.id === "companyPID" || ev.target.id === "companyID"){

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

        const elem = document.getElementById(ev.target.id);
        elem.appendChild(newDiv);
        }else{
            const elem = document.getElementById("expandedProduct");
            elem.remove();
        }

    }
    else if(ev.target.id === "connectDiv" || ev.target.id === "connectPID" || ev.target.id === "connectID"){

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

        const elem = document.getElementById(ev.target.id);
        elem.appendChild(newDiv);
        }else{
            const elem = document.getElementById("expandedProduct");
            elem.remove();
        }

    }
}
