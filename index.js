export default function({Plugin, types: t}) {

    let addClassName = function(node, partner) {
        if(node.id == null) { // If class name not defined
            return node
        }

        node.body.body.unshift({
            type: "ClassProperty",
            key: {
                name: "className",
                type: "Identifier"
            },
            value: {
                value: node.id.name,
                type: "Literal"
            },
            static: true,
            computed: false
        })

        return node
    }

    return new Plugin("class-name", {
        visitor: {
            ClassDeclaration: addClassName,
            ClassExpression: addClassName
        }
    })
}
