public class LinkedList {
    public static void main(String[] args) {
        LinkedListExample ll = new LinkedListExample();

        ll.add("1");
        ll.add("2");
        ll.add("3");
        ll.add("4");
        ll.add("FU");

        System.out.println("Whole list:" + ll);
    }
}

class LinkedListExample {
    private Node head;
    private static int counter;

    public void add(Object data) {

        //If first element in the node
        if (head ==null) {
            System.out.println("Create Head");
            head = new Node();
        }

        //Create new node
        Node currentData = new Node(data);
        Node currentNode = head;

        // Check for NPE
        if (currentNode !=null) {
                while (currentNode.getNext() !=null) {
                currentNode = currentNode.getNext();
            }

            currentNode.setNext(currentData);

        }

        incrementCounter();
    }

    private static int getCounter() {
		return counter;
	}

	private static void incrementCounter() {
		counter++;
	}

	private void decrementCounter() {
		counter--;
	}

    public String toString() {
		String output = "";

		if (head != null) {
			Node currentNode = head.getNext();
			while (currentNode != null) {
				output += "[" + currentNode.getData().toString() + "]";
				currentNode = currentNode.getNext();
			}

		}
		return output;
	}

    private class Node {
        Node next;
        Object data;

        public Node() {
            next = null;
            data = null;
        }

        public Node(Object value) {
            next = null;
            data = value;
        }

        //2nd constructor
        public Node(Object value, Node nextValue) {
            next = nextValue;
            data = value;
        }

        public Object getData() {
            return data;
        }

        public void setData(Object value) {
            data = value;
        }

        public Node getNext() {
            return next;
        }

        public void setNext(Node nextValue) {
            next = nextValue;
        }
    }

}
