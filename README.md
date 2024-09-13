# week_1
WEEK-1 ASSIGNMENT : creating a simple static website and making use of API requests with js along with version control using git.<br>
Author : Madhunala Akash

![index](https://github.com/user-attachments/assets/557bf35d-a785-463b-a3f3-52c784976a4c)

![About](https://github.com/user-attachments/assets/6309a66d-cc35-4d32-8b43-be921f1753c1)

![Search_Movies](https://github.com/user-attachments/assets/f1347084-2dc9-4ed2-8c22-3e4221d5bf04)

![Trending](https://github.com/user-attachments/assets/c29f03cc-8080-43ba-baca-a7c613ff7c99)


## **Movie Explorer - Static Website**

This project is a simple static website consisting of multiple HTML pages linked together with a consistent layout using CSS for styling. The website uses JavaScript to fetch data from a public API and display it on a web page.

### **Features:**
- **Home Page:** Search for movies by entering a movie name. It fetches data from [The Movie Database (TMDb)](https://www.themoviedb.org/documentation/api) using their API.
- **Trending Movies Page:** Display trending movies fetched from TMDb API.
- **About Page:** Information about the website and its functionality.
- **CSS Layout:** A clean and responsive layout using CSS.
- **Error Handling:** User-friendly error messages if API requests fail.
  
### **Technologies Used:**
- HTML5
- CSS3
- JavaScript (with async/await)
- TMDb API
- Git for version control

### **Project Structure:**
```bash
├── index.html        # Home page with movie search functionality
├── trending.html     # Page to display trending movies
├── about.html        # About page with project information
├── styles.css        # Common styles for all pages
├── script.js         # JavaScript for fetching and displaying movie data
└── README.md         # Project information and instructions
```

### **How to Run:**
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/week_1.git
    ```
2. Open `index.html`, `trending.html`, or `about.html` in a browser to view the website.

### **API Information:**
- API Key: `a752bfbf264b529a53535e2be696ea9c` (Replace this key with your own key from TMDb).
- Base API URL: `https://api.themoviedb.org/3`

### **Git Commands Used for Version Control:**

1. **Initialize Git in the Project:**
    ```bash
    git init
    ```

2. **Add Files to Staging Area:**
    ```bash
    git add .
    ```

3. **Commit Changes:**
    ```bash
    git commit -m "Initial commit - added HTML, CSS, and JavaScript files"
    ```

4. **Create Remote Repository and Link:**
    ```bash
    git remote add origin https://github.com/your-username/week_1.git
    ```

5. **Push Changes to Remote Repository:**
    ```bash
    git push -u origin main
    ```

6. **Create New Branch for Feature Development:**
    ```bash
    git checkout -b feature-about-page
    ```

7. **Switch Between Branches:**
    ```bash
    git checkout main
    ```

8. **Merge Feature Branch to Main:**
    ```bash
    git merge feature-about-page
    ```

9. **Pull Changes from Remote Repository:**
    ```bash
    git pull origin main
    ```

10. **Check Git Status:**
    ```bash
    git status
    ```
