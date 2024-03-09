function customRender(reactElement, container) {// React element aur container ko input ke roop me lete hain
    // // React element ke type ke basis par ek DOM element banate hain
    // const domElement = document.createElement(reactElement.type);
    
    // // DOM element ka innerHTML ko reactElement ke children ke basis par set karte hain
    // domElement.innerHTML = reactElement.children;
    
    // // DOM element ke href aur target attributes ko reactElement ke props ke basis par set karte hain
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);
    
    // // Naya banaya hua DOM element ko specify kiye gaye container me append karte hain
    // container.appendChild(domElement);



    const domElement = document.createElement(reactElement.type);// React element ke type ke basis par ek DOM element banate hain
    domElement.innerHTML = reactElement.children;// DOM element ka innerHTML ko reactElement ke children ke basis par set karte hain
    for(const prop in reactElement.props){
        if(prop==='children')continue;
        domElement.setAttribute(prop,reactElement.props[prop]);// DOM element ke href aur target attributes ko reactElement ke props ke basis par set karte hain
    }
    container.appendChild(domElement);// Naya banaya hua DOM element ko specify kiye gaye container me append karte hain


}


const reactElement={            // React element ko define karte hain
    type:'a',                   // React element ke type ko specify karte hain
    props:{                     // React element ke props ko specify karte hain
        href:'https://www.google.com',
        target:'_blank',
       

    },
    children:'Click Me to Visist google'
}                                  // React element ke children ko specify karte hain


const mainContainer=document.querySelector('#root')// Container ko select karte hain


customRender(reactElement,mainContainer)// customRender function ko call karte hain 
                                          // reactElement ko arguments