function customRender(reactElement,container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // container.appendChild(domElement)


    // another way of creating element:--
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type : 'a',
    props: {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Click here to visit google'
}

const mainContainer = document.querySelector('#root')
customRender(reactElement,mainContainer)



// ->You're simulating what ReactDOM.render() does in a very simplified way.
// ->reactElement is a fake JSX element (as an object).
// ->customRender turns it into a real DOM node and adds it to the page.

