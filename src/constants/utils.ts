import { AllIcons } from "@assets";
import { ImageSourcePropType } from "react-native";

// Define a type for the object
export type Item = {
    name: string;
    image: ImageSourcePropType;
    type: 'View' | 'Cancel';
  };
  
  // Create an array of objects with the specified keys and value restrictions
  export const items: Item[] = [
    { name: 'Item1', image: AllIcons.Avatar1, type: 'View' },
    { name: 'Item2', image: AllIcons.Avatar1, type: 'Cancel' },
    { name: 'Item3', image: AllIcons.Avatar1, type: 'View' },
    { name: 'Item4', image: AllIcons.Avatar1, type: 'Cancel' },
    { name: 'Item5', image: AllIcons.Avatar1, type: 'View' },
    { name: 'Item6', image: AllIcons.Avatar1, type: 'Cancel' },
    { name: 'Item7', image: AllIcons.Avatar1, type: 'View' },
    { name: 'Item8', image: AllIcons.Avatar1, type: 'Cancel' },
    { name: 'Item9', image: AllIcons.Avatar1, type: 'View' },
    { name: 'Item10', image: AllIcons.Avatar1, type: 'Cancel' },
    // Add more items as necessary
  ];
  
  // Example usage
  console.log(items);


  export const apiResponse = {
    fail:'fail'
  }