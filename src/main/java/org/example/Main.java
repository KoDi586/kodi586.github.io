package org.example;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {


        Main main = new Main();
        System.out.println("main = " + main.searchInsert(new int[]{3, 4, 6, 7, 9}, 10));


    }

    public int searchInsert(int[] nums, int target) {
        return customBinarySearch(nums, target, 0, nums.length-1);
    }

    private int customBinarySearch(int[] nums, int target, int first, int latest) {
        if (first > latest) {

            if(true) return first;
            else return -1;
        }

        int mid = first + (latest-first)/2;

        if (target == nums[mid])
            return mid;

        else if (nums[mid] > target) return customBinarySearch(nums, target, first, mid - 1);

        else if (nums[mid] < target) return customBinarySearch(nums, target, mid+1, latest);

        return target;
    }
}