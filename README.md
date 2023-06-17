# Inter Back
# Inter Back is a Django-based web application for resolve the excercise and connect to the frontend to let the data pass.

Features
Exercise 1: [Chess the queen moves posibilities]
Exercise 2: [String Value to get the result of the string]
API: [To Work with the Frontend]
Installation
Clone the repository:
git clone https://github.com/Raikonif/InterviewReactDjango.git
Navigate to the project directory:
# cd InterviewReactDjango/inter_back Or InterviewReactDjango/inter_front
1. inter_back 
    # a. Initiliaze the virtual environment
        python -m venv env
    # b. Activate the virtual environment
        source env/bin/activate  # For macOS/Linux
        .\env\Scripts\activate  # For Windows
    # c. Install the dependencies:
        pip install -r requirements.txt
    # d. change env.example file to .env
    # e. Set up the database:
        python manage.py migrate
    # f. Start the development server:
        python manage.py runserver
    # g. Open your web browser and navigate to http://localhost:8000/api to access the application.

2. inter_front
    # a. Initiliaze the virtual environment
        yarn
    # b. Start the development server:
        yarn dev
    # c. Open your web browser and navigate to http://localhost:5173 to access the application.
    # d. Open the console to see the console.log for the demo connection data from the backend.

Frontend
The frontend is built with React/Typescript and TailwindCSS with Vite. The frontend is located in the inter_front directory.
1. I implemented eslint, prettier and tailwind prettier to automate the code format.
2. I implemented the tailwindcss to make the styles efficiently.
3. I implemented the react-router-dom to make the routes and navigate between the pages.
4. I implemented dotenv to make the environment variables.
5. I implemented the axios to make the request to the backend.
6. I implemented the organization of the directories to make the code more readable.
7. I implemented the typescript to make the code more readable and to avoid errors.
8. I implemented the .env to maintain the security of the data.

Backend
The backend is built with Django and Django REST Framework. The backend is located in the inter_back directory.
1. I implemented dotenv to make the environment variables.
2. I created the api to make the connection with the frontend.
3. I implemented .env to maintain the security of the data.
