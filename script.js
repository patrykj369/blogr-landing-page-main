function showMobileMenu(){
    const sprawdz = document.getElementsByClassName("menuMobileDiv");

    if(sprawdz.length === 0){
        const menuDiv = document.createElement("div");
        menuDiv.classList.add("menuMobileDiv");
        menuDiv.id = "menuMobileID";

        const productDiv = document.createElement("div");
        productDiv.classList.add("productDiv");
        productDiv.id = "productDiv";
        productDiv.onclick = (ev) => expandMenu(ev);
        const product = document.createElement("p");
        product.innerHTML = "Product";
        product.classList.add("productP");
        const productArrow = document.createElement("img");
        productArrow.src = "./images/icon-arrow-dark.svg";
        productArrow.classList.add("productArrow");

        productDiv.appendChild(product);
        productDiv.appendChild(productArrow);
        menuDiv.appendChild(productDiv);

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
        menuDiv.appendChild(companyDiv);

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
        menuDiv.appendChild(connectDiv);


        const elem = document.getElementById("headerM");
        elem.appendChild(menuDiv);
    }else{
        const elem = document.getElementById("menuMobileID");
        elem.remove();
    }

}

function expandMenu(ev){
    if(ev.target.id === "productDiv"){
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
    }else if(ev.target.id === "companyDiv"){

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
    else if(ev.target.id === "connectDiv"){

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
