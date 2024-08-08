import Node from "./node.js";

const List = () => {
	let head = null;

	const append = (value) => {
		const newNode = Node(value);
		if (head === null) {
			head = newNode;
		} else {
			let pointer = head;
			while (pointer.nextNode) {
				pointer = pointer.nextNode;
			}
			pointer.nextNode = newNode;
		}
	};

	const prepend = (value) => {
		const newNode = Node(value, head);
		head = newNode;
	};

	const size = () => {
		let count = 1;
		let pointer = head;
		while (pointer.nextNode) {
			pointer = pointer.nextNode;
			count++;
		}
		return count;
	};

	const printHead = () => {
		return head.value;
	};

	const printTail = () => {
		let pointer = head;
		while (pointer.nextNode) {
			pointer = pointer.nextNode;
		}
		return pointer.value;
	};

	const at = (index) => {
		let pointer = head;
		for (let i = 0; i < index; i++) {
			pointer = pointer.nextNode;
		}
		return pointer.value;
	};

	const pop = () => {
		let pointer = head;
		while (pointer.nextNode.nextNode) {
			pointer = pointer.nextNode;
		}
		pointer.nextNode = null;
	};

	const contains = (value) => {
		let pointer = head;
		if (head === value) return true;
		while (pointer.nextNode) {
			if (pointer.value === value) {
				return true;
			}
			pointer = pointer.nextNode;
		}
		return false;
	};

	const find = (value) => {
		let pointer = head;
		let index = 0;
		if (head === value) return index;
		while (pointer.nextNode) {
			if (pointer.value === value) {
				return index;
			}
			index++;
			pointer = pointer.nextNode;
		}
		return false;
	};

	const toString = () => {
		let str = "";
		let pointer = head;

		while (pointer) {
			if (!pointer.nextNode) {
				str += `(${pointer.value}) -> null`;
			} else {
				str += `(${pointer.value}) -> `;
			}
			pointer = pointer.nextNode;
		}
		return str;
	};

	const insertAt = (value, index) => {
		const newNode = Node(value);
		let pointer = head;
        if (index === 0) {
            prepend(value);
            return;
        }
		for (let i = 0; i < index-1; i++) {
			pointer = pointer.nextNode;
		}
        newNode.nextNode = pointer.nextNode;
        pointer.nextNode = newNode;
	};

	return {
		append,
		prepend,
		size,
		printHead,
		printTail,
		at,
		pop,
		contains,
		find,
		toString,
		insertAt,
	};
};

export default List;
