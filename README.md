Part 3 Submission

Student Name: Gqamile Bantwini Mapela
Student Number: ST10457235
Module Name: MAST
Submission Date: 13/11/2025

⸻

Project Overview

I built this mobile application with React Native, Expo, and TypeScript and designed to manage and display a restaurant menu.

Key Features I Have Added in Part 3:
	• Chef login & dashboard
	• Adding and removing dishes
	• Viewing menu statistics (total dishes, average price, categories, vegetarian dishes)
	• Guest menu browsing & filtering
	• State management with MenuContext

⸻

Features

Chef
	•	Login Screen: Authenticate chef locally.
	•	Dashboard: Displays menu statistics and list of dishes.
	•	Add Dish: Form to add new dishes with name, description, category (Starter/Main/Dessert), price and optional image.
	•	Remove Dish: Tap the remove button next to the dish in the dashboard to remove it.

Guest
	•	Browse all menu items with images, descriptions, prices, and categories.

⸻

Screens Implemented

| Screen              | Description                                           |
|--------------------|-------------------------------------------------------|
| WelcomeScreen       | Choose to continue as Guest or Chef.                |
| ChefLoginScreen     | Local login screen for Chef.                         |
| ChefDashboardScreen | Shows menu statistics and list of dishes; tap a dish to remove. |
| AddDishScreen       | Form to add a new dish with optional image.         |
| GuestMenuScreen     | View all menu items in a scrollable list.           |
| GuestFilterScreen   | Filter menu items by category.                      |

⸻

Navigation Flow

Guest:

WelcomeScreen → GuestMenuScreen → GuestFilterScreen

Chef:

WelcomeScreen → ChefLoginScreen → ChefDashboardScreen → AddDishScreen

⸻

Tech Stack & Dependencies
	• React Native 0.81.5
	• Expo SDK 54
	• TypeScript 5.9.3
	• React Navigation (native-stack & native)
	• @react-native-picker/picker
	• expo-image-picker
	• Context API for menu state

Installed Packages:

@react-native-picker/picker
@react-navigation/native
@react-navigation/native-stack
@types/react
@types/react-native
@types/react-navigation
expo
expo-image-picker
expo-status-bar
react
react-native
react-native-safe-area-context
react-native-screens
typescript


⸻

Color Palette
	•	Background: #F8F3EE
	•	Card: #FFFFFF (border: #E5D7C6)
	•	Primary Text: #3E2C24
	•	Secondary Text: #6C5C4B
	•	Accent / Category Text: #9C8265

⸻

Notes
	•	Menu items are managed locally using MenuContext.
	•	Adding/removing dishes updates the dashboard in real time.
	•	Image upload is optional for each dish.

