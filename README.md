# Restaurant Menu Management App 📱

A mobile application built with **React Native**, **Expo**, and **TypeScript** for managing and displaying a restaurant menu.  
The app supports multiple user roles and focuses on clean state management, intuitive navigation, and real-time UI updates.

This project demonstrates my ability to design, build, and structure a functional mobile application using modern React Native practices.

---

## Project Overview

The app allows a **Chef** to manage menu items through a dashboard, while **Guests** can browse and filter the menu.  
All menu data is handled locally using React’s Context API, ensuring consistent and responsive updates across screens.

---

## Key Features

### Chef
- Local authentication via login screen  
- Dashboard displaying menu statistics:
  - Total number of dishes  
  - Average price  
  - Categories  
  - Vegetarian dishes  
- Add new dishes with:
  - Name, description, category (Starter / Main / Dessert)
  - Price
  - Optional image upload  
- Remove dishes directly from the dashboard

### Guest
- Browse all available menu items
- View dish images, descriptions, prices, and categories
- Filter menu items by category

---

## Screens Implemented

| Screen | Description |
|------|------------|
| WelcomeScreen | Entry point to continue as Guest or Chef |
| ChefLoginScreen | Local authentication for Chef |
| ChefDashboardScreen | Displays menu statistics and dish list |
| AddDishScreen | Form to add new dishes with optional image |
| GuestMenuScreen | Scrollable list of all menu items |
| GuestFilterScreen | Filter menu items by category |

---

## Navigation Flow

### Guest Flow  
`Welcome → Guest Menu → Filter Menu`

### Chef Flow  
`Welcome → Chef Login → Dashboard → Add Dish`

Navigation is handled using **React Navigation (native-stack)** for smooth and structured screen transitions.

---

## Tech Stack

- **React Native** 0.81.5  
- **Expo SDK** 54  
- **TypeScript** 5.9.3  
- **React Navigation** (native & native-stack)  
- **Context API** for global menu state management  

---

## Dependencies

- @react-native-picker/picker  
- @react-navigation/native  
- @react-navigation/native-stack  
- expo-image-picker  
- expo-status-bar  
- react-native-safe-area-context  
- react-native-screens  
- typescript  

---

## UI & Design

The app uses a warm, minimal color palette focused on readability and usability:

- **Background:** `#F8F3EE`  
- **Cards:** `#FFFFFF` (border: `#E5D7C6`)  
- **Primary Text:** `#3E2C24`  
- **Secondary Text:** `#6C5C4B`  
- **Accent / Category Text:** `#9C8265`

---

## Notes & Implementation Details

- Menu data is stored and managed locally using `MenuContext`
- Adding or removing dishes updates the UI in real time
- Image upload is optional for each dish
- The project is structured for clarity, scalability, and maintainability

---
