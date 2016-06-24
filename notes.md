


Trees and Heaps:

### Heap
 - Patients waiting in an emergency room. Patients are assigned a priority. When a doctor becomes available they want to see the patient with the highest priority.
If extracting the max value  needs to be fast, use a heap.


Search an unordered tree:
Breadth first Search (BFS) - start with the root and moves left to right across the next level. Uses more memory because you need to track the child nodes for all nodes.
Depth first search (DFS) - Follows a branch of a tree down as many levels as possible until the target is found or it ended, then it is continued to the nearest ancestor. DFS has much lower memory requirements.

Traversal - visit every node in the tree.
 - Preorder
 - Inorder
 - Postorder

### Graphs
Tree is actually a special case graph. Graphs can have multiple parents possibly creating a loop. Links can have values or weights, called "Edges". Edges can be one-way or two-way. One way edge is called a directed graph. Graph with two-way pointers is called a undirected graph. Used in real world problems difficult to model.

## Recursion
Iterative solutions are usually more efficient than recursive

## Sorting
Selection sort - Simplest sorting algorithms. Start with the first element in the array and scans through the array to find the element with the smallest key, which it swaps with the first element. Then the process is repeated.
Insertion sort - Build on a sorted array (or list) one element at a time by comparing each new element tot he already-sorted elements.
Quick sort - Divide and conquer algorithm, chooses a `pivot` point splitting into two subsets Minimal auxiliary storage (in-place storage)
Merge sort - Take sorted lists and put them together

## Concurrency
Threads
Monitor - is a set of routines protected by a mutual exclusion lock.
Semaphores - a lock that protects a shared resource
Mutex - mutual exclusion
Counting Semaphores
Event Semaphores
Deadlock - each thread is permanently stalled because the lock isn't released.

## OOP

Polymorphism provide multiple implementations of an action and select the correct implementation based on surrounding object.
- Two versions of the same method with different parameters
public abstract class Shape {
    protected Shape(){
    }
    public Point getCenter(){

    }
    public abstract void draw( Graphics g );
}
public class Rectangle extends Shape {
    public void draw (Graphics g){
        //code to paint rectangle.
    }
}

Construction and Destruction - Object =s are instances of classes.

Difference between and interface and an abstract class -
 - Interface declares a set of related methods, outside of any class abstract class 0 is an incomplete class definition that declares but does not define all its methods.
 - Interface defines the API
 - Abstract class is a proper class, can have data members and method definitions.
  - Virtual keyword, runtime definition of an object determine the type that is used.
  
