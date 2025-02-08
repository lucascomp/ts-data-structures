import { Nullable } from '../common/nullable';

export class BinarySearchTreeNode<T> {
  constructor(
    public value: T,
    public left: Nullable<BinarySearchTreeNode<T>> = null,
    public right: Nullable<BinarySearchTreeNode<T>> = null,
  ) {}
}
