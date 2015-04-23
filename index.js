var Transformer = require("babel-core").Transformer;

function addClassName(node) {
	node.body.body.unshift({
		type: "ClassProperty",
		key: {
			name: "_className",
			type: "Identifier"
		},
		value: {
			value: node.id.name,
			type: "Literal"
		},
		static: true,
		computed: false
	});
}

module.exports = new Transformer("addClassName", {
	ClassDeclaration: addClassName,
	ClassExpression: addClassName
});
